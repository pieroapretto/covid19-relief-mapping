import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setZipCode, setLatLngCoordinates } from '../../../actions/filters';
import ActionButton from '../../helpers/ActionButton';
import SubHeader from '../../helpers/SubHeader';

const ZipcodePrompt = (props) => {
    const [zipcode, setZipcodeInput] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleZipcodeSubmit = (e) => {
        e.preventDefault();

        if (!zipcode || zipcode.length !== 5) {
            setError('Please enter a valid 5-digit zipcode');
            return;
        }

        setLoading(true);
        setError('');

        // Use Google Geocoding API to get lat/lng from zipcode
        fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${process.env.GOOGLE_MAPS_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'OK' && data.results.length > 0) {
                    const location = data.results[0].geometry.location;

                    // Dispatch actions to set zipcode and coordinates
                    props.dispatch(setZipCode(zipcode));
                    props.dispatch(setLatLngCoordinates({ lat: location.lat, lng: location.lng }));

                    // Navigate to filters page
                    props.history.push('/filters');
                } else {
                    setError('Zipcode not found. Please try again.');
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error('Error geocoding zipcode:', err);
                setError('Unable to verify zipcode. Please try again.');
                setLoading(false);
            });
    };

    return (
        <div id="zipcode_prompt_content">
            <h1>Welcome, {props.auth.displayName}!</h1>
            <div className="block-text-container">
                <p>To get started, please enter your zipcode so we can show you neighbors in your area who need help or are offering assistance.</p>
            </div>

            <SubHeader Text="Enter Your Zipcode"/>

            <form onSubmit={handleZipcodeSubmit} className="zipcode-form">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter 5-digit zipcode"
                        value={zipcode}
                        onChange={(e) => setZipcodeInput(e.target.value)}
                        maxLength="5"
                        pattern="[0-9]{5}"
                        disabled={loading}
                    />
                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                </div>

                <div className="btn-container">
                    <ActionButton
                        Text={loading ? "Verifying..." : "Continue"}
                        Class="primary-large"
                        onClick={handleZipcodeSubmit}
                    />
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps)(ZipcodePrompt));
