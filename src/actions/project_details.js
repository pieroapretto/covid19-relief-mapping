import uuid from 'uuid';
import { firebase_service } from '../services/firebase_service';

// SELECT_PROJECT
export const selectProject = (selected_project) => ({
  type: 'SELECT_PROJECT',
  project: {
    key: uuid(),
    _id: selected_project._id,
    name: selected_project.name,
    type: selected_project.type,
    contact_method: selected_project.contact_method,
    contact_value: setContactValue(selected_project),
    date_string: setDateValue(selected_project.timestamp),
    time: selected_project.timestamp,
    description: selected_project.description,
    business_name: selected_project.business_name || null
  }
});

export const selectDonationLocation = (id) => {
  return (dispatch) => {
    firebase_service.getDonationLocationById(id).then(data => {
        dispatch(selectProject(data));
    });
  }
};

export const selectDoneeLocation = (id) => {
  return (dispatch) => {
    firebase_service.getDoneeLocationById(id).then(data => {
        dispatch(selectProject(data));
    });
  }
};

const setContactValue = (selected_project) => {
  switch (selected_project.contact_method) {
    case 'Text': 
    case 'Phone':
      return selected_project.phone;
    case 'Email':
      return selected_project.emeail;
    case 'Facebook':
      return selected_project.facebook_url;
    default:
      return 'No contact info found';
  }
}

const setDateValue = (timestamp) => {
  let date = new Date(timestamp);
  const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
  const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(date) 
  return `${da}-${mo}-${ye}`;
}