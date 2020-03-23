import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { MeepService } from '../../../../services/meep_service';
import { setMapCenter } from '../../../../actions/map';
import { setZipCode, setLatLngCoordinates } from '../../../../actions/filters';
import { connect } from 'react-redux';

const meep_service = new MeepService();

class ZipLookUpField extends React.Component {
    constructor(props) {
        super(props);
    }

    setMapCenterWithZipCode = (zipcode) => {
        const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);

        if(isValidZip) {
            meep_service.getGeoDataByZipCode(zipcode).then(lat_lng => {
                if(lat_lng.hasOwnProperty('lat') && lat_lng.hasOwnProperty('lng')) {
                    this.props.dispatch(setMapCenter(lat_lng));
                    this.props.dispatch(setLatLngCoordinates(lat_lng));
                    this.props.dispatch(setZipCode(zipcode));
                }
            });
        } else {
            console.log('invalid zipcode');
        }
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.setMapCenterWithZipCode(e.target.value);
        }
    }

    render() {
        return (
            <InputGroup size="sm" className="my-1">
                <FormControl 
                    aria-label="zipcode lookup" 
                    defaultValue={parseInt(this.props.zipcode)}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                    onBlur={(e) => this.setMapCenterWithZipCode(e.target.value)}/>
            </InputGroup>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        ...ownProps,
        zipcode: state.filters.zipcode
    }
};

export default connect(mapStateToProps)(ZipLookUpField);