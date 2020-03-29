// FILTER_BY_RANGE
export const setRangeFilter = (range = 10) => ({
    type: 'FILTER_BY_RANGE',
    range: parseInt(range)
});

// FILTER_BY_START_DATE
export const setStartDateFilter = (state_date) => ({
    type: 'FILTER_BY_START_DATE',
    start_date: getTimeValueFromDate(state_date)
});

// FILTER_BY_END_DATE
export const setEndDateFilter = (end_date) => ({
    type: 'FILTER_BY_END_DATE',
    end_date: getTimeValueFromDate(end_date)
});

// ADD_TYPE_FILTER
export const addTypeFilter = (project_type) => ({
    type: 'ADD_TYPE_FILTER',
    project_type: project_type
});

// REMOVE_TYPE_FILTER
export const removeTypeFilter = (project_type = null) => ({
    type: 'REMOVE_TYPE_FILTER',
    project_type: project_type
});

// SET_ZIPCODE
export const setZipCode = (zipcode) => ({
    type: 'SET_ZIPCODE',
    zipcode: zipcode
});

// SET_LAT_LNG
export const setLatLngCoordinates = (latLngCoordinates) => ({
    type: 'SET_LAT_LNG',
    lat_lng: latLngCoordinates
});

// RESET_FILTERS
export const resetFilters = () => ({
    type: 'RESET_FILTERS'
});

const getTimeValueFromDate = (days_ago=0) => {
    let todays_date = new Date();

	if(days_ago) {
		let past_date = todays_date.getDate() - days_ago;
		todays_date.setDate(past_date);
	}
	return todays_date.getTime();
}