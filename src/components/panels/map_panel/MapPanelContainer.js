import React, { useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux';
import { getDonationLocations, getDoneeLocations } from '../../../actions/locations';
import { selectProject } from '../../../actions/project_details';
import { withRouter} from 'react-router-dom';
import { selectProjectLocations } from '../../../selectors/locations';
import { GoogleMapsAPIKey } from '../../../../private/google_maps';
import uuid from 'uuid';
import { ProjectTypeCSSMap } from '../../../utilities/style_utilities';

const mapStateToProps = (state, ownProps) => {
    return { 
        ...ownProps,
        donation_locations: state.donation_locations ? selectProjectLocations(state.donation_locations, state.filters) : [],
        donee_locations: state.donee_locations ? selectProjectLocations(state.donee_locations, state.filters) : [],
        map_state: state.map_state
    }
};

const MyMapComponent = connect(mapStateToProps)(withScriptjs(withGoogleMap((props) => {
    useEffect(() => {
        props.dispatch(getDonationLocations());
        props.dispatch(getDoneeLocations());
      }, []);

    const dispatchProjectSummary = (location) => {
        props.dispatch(selectProject(location));
        props.history.push("/details");
    }

    return (
        <GoogleMap
            key={uuid()}
            defaultZoom={props.map_state.zoom}
            defaultCenter={props.map_state.center}>
            {props.donation_locations.map(location => {
                const myLatlng = {lat: location.lat, lng: location.lng};
                const iconType = ProjectTypeCSSMap[location.type] || 'default';
                const iconTypeImg = `/images/markers/${iconType}-marker.svg`;
                return <Marker
                            key={location.key}
                            icon={iconTypeImg}
                            onClick={()=>dispatchProjectSummary(location)}
                            position={myLatlng}>
                        </Marker>
            })}
            {props.donee_locations.map(location => {
                const myLatlng = {lat: location.lat, lng: location.lng};
                return <Marker
                            key={location.key}
                            icon='/images/markers/baby-blue-marker.svg'
                            onClick={()=>dispatchProjectSummary(location)}
                            position={myLatlng}>
                        </Marker>
            })}
        </GoogleMap>
    )
})));

const MapContainer = (props) => {
        return (
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPIKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100vh` }} />}
                history={props.history}
            />
        );

}

export default withRouter(MapContainer);