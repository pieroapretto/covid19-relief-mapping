import uuid from 'uuid';
import { firebase_service }  from '../services/firebase_service';
import { ProjectTypePropsMap } from '../utilities/project_types';

// 'ADD_DONATIONS'
// 'ADD_DONEES'
export const addLocations = (type, locations) => ({
  type: type,
  locations: locations.map(location => {
      const location_type = ProjectTypePropsMap[location.type];
      return {
        key: uuid(),
        _id: location._id,
        name: location.name,
        type: (type === 'ADD_DONATIONS' && location_type) ? location_type.value : 'request',
        contact_method: location.contact_method,
        phone: location.phone,
        timestamp: setTimeValue(location.timestamp),
        street_address: location.street_address,
        display_address: location.display_address,
        email: location.email,
        facebook_url: location.facebook_url,
        description: location.description,
        lat: location.lat || null,
        lng: location.lng || null,
        business_name: location.business_name || null
      }
  })
});

const setTimeValue = (timestamp) => {
  let date = new Date(timestamp);
  return date.getTime();
}

export const getDonationLocations = () => {
  return (dispatch) => {
    firebase_service.getDonationLocations().then(donation_locations => {
      dispatch(addLocations('ADD_DONATIONS', donation_locations));
    });
  }
}


export const getDoneeLocations = () => {
  return (dispatch) => {
    firebase_service.getDoneeLocations().then(donee_locations => {
      dispatch(addLocations('ADD_DONEES', donee_locations));
    });
  }
}