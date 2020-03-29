const locationsReducerDefaultState = [];
  
export default (state = locationsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_DONATIONS':
            return [
                ...state,
                action.locations
            ];
        default:
            return state;
    }
};