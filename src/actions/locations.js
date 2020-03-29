import uuid from 'uuid';
import { firebase_service }  from '../services/firebase_service';

// 'ADD_DONATIONS'
// 'ADD_DONEES'
export const addLocations = (type, locations) => ({
  type: type,
  locations: locations.map(location => {
      return {
        key: uuid(),
        _id: location._id,
        name: location.name,
        type: (type === 'ADD_DONATIONS') ? location.type : 'Request',
        contact_method: location.contact_method,
        phone: location.phone,
        timestamp: location.timestamp,
        email: location.email,
        facebook_url: location.facebook_url,
        description: location.description,
        lat: location.lat || null,
        lng: location.lng || null,
        business_name: location.business_name || null
      }
  })
});

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