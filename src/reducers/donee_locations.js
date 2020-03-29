const locationsReducerDefaultState = [];
  
export default (state = locationsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_DONEES':
            return [
                ...state,
                action.locations
            ];
        default:
            return state;
    }
};