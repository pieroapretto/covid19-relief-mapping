const mapReducerDefaultState = {
    center: {lat: 39.057, lng: -94.594},
    zoom: 12
};
  
export default (state = mapReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CENTER':
            return {
              ...state,
              center: action.center
            };
        case 'SET_ZOOM':
            return {
              ...state,
              zoom: action.zoom
            };
        default:
            return state;
    }
};