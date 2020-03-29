const filtersReducerDefaultState = {
  range: 10,
  zipcode: 64106,
  lat_lng: { lat: 39.057, lng: -94.594 },
  types: [],
  startDate: null,
  endDate: null
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'RESET_FILTERS':
      return {
        ...filtersReducerDefaultState,
        zipcode: state.zipcode,
        lat: state.lat,
        lng: state.lng
      };
    case 'FILTER_BY_RANGE':
      return {
        ...state,
        range: action.range
      };
    case 'ADD_TYPE_FILTER':
      return {
        ...state,
        types: [...state.types, action.project_type]
      };
    case 'REMOVE_TYPE_FILTER':
      return {
        ...state,
        types: state.types.filter(type => type !== action.project_type)
      };
    case 'FILTER_BY_START_DATE':
      return {
        ...state,
        startDate: action.start_date
      };
    case 'FILTER_BY_END_DATE':
      return {
        ...state,
        endDate: action.end_date
      };
    case 'SET_ZIPCODE': 
      return {
        ...state,
        zipcode: action.zipcode
      };
    case 'SET_LAT_LNG': 
      return {
        ...state,
        lat_lng: action.lat_lng
      };
    default:
      return state;
  }
};