import { createStore, combineReducers, applyMiddleware } from 'redux';
import donationLocationsReducer from '../reducers/donation_locations';
import doneeLocationsReducer from '../reducers/donee_locations';
import filtersReducer from '../reducers/filters';
import projectDetailsReducer from '../reducers/project_details';
import mapSettingsReducer from '../reducers/map';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      donation_locations: donationLocationsReducer,
      donee_locations: doneeLocationsReducer,
      selected_project: projectDetailsReducer,
      filters: filtersReducer,
      map_state: mapSettingsReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};