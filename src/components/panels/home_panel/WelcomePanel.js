import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';
import { resetFilters } from '../../../actions/filters';
import { startFacebookLogin, login } from '../../../actions/auth';

const WelcomePanel = (props) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        props.dispatch(resetFilters());
    }, []);

    const handleFacebookSignIn = () => {
        setLoading(true);
        setError('');

        props.dispatch(startFacebookLogin())
            .then((result) => {
                const user = result.user;
                props.dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
                // Navigate to zipcode prompt
                props.history.push('/zipcode-prompt');
            })
            .catch((error) => {
                console.error('Facebook sign-in error:', error);
                setError(error.message || 'Failed to sign in with Facebook. Please try again.');
                setLoading(false);
            });
    };

    return (
        <div id="welcome_panel_content">
            <h1>Help Your Neighbors, Strengthen Your Community</h1>
            <div className="block-text-container">
                {/* TODO: Update these Google Form URLs with new neighborly-focused forms */}
                <p><a href="https://forms.gle/fwSfqDd87EkQFHn78" target="_blank">Sign up</a> to help your neighbors. Neighborly brings back the community spirit we enjoyed in the past, when neighbors looked out for each other. Whether you need help or have something to offer, connecting is easy. <a href="https://forms.gle/PuchtZrmHwCJ1GNs9" target="_blank">Join your community</a> today.</p>
            </div>
            <SubHeader Text="Here's How It Works"/>
            <IconRow IconType="volunteer" Text="Request help from neighbors for tasks, services, or resources you need."/>
            <IconRow IconType="donation" Text="Offer your services, skills, or extra resources to help neighbors for free."/>
            <IconRow IconType="filter" Text="Search for help in your area by zipcode, proximity, date and type."/>
            <div className="btn-container">
                <ActionButton
                    Text={loading ? "Signing in..." : "Sign in with Facebook"}
                    Class="primary-large"
                    onClick={handleFacebookSignIn}
                />
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                <Link to="/filters">
                    <ActionButton Text="Browse Without Signing In" Class="secondary-large"/>
                </Link>
            </div>
        </div>
    )
};

export default withRouter(connect()(WelcomePanel));