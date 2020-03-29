const detailsReducerDefaultState = {
    _id: null,
    name: null,
    type: null,
    contact_method: null,
    contact_value: null,
    date_string: null,
    time: null,
    description: null,
    business_name: null
};
  
export default (state = detailsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SELECT_PROJECT':
            return {...action.project};
        default:
            return state;
    }
};