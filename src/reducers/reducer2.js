import * as types from '../constants/actionTypes';

const initialState = {
    fetching: false,
    id: null,
    employee_name: null,
    employee_salary: null,
    employee_age: null,
    profile_image: null,
    error: null
};



export function reducer2(state = initialState, action) {
    console.log('action: ', action);
    // console.log('initialState: ', initialState);
    switch (action.type) {
        case types.EMPLOYEE_REQUEST:
            return { ...state, fetching: true, error: null };
        case types.EMPLOYEE_SUCCESS:
            return { ...state, fetching: false, employee_name: action.employee.employee_name };
        case types.EMPLOYEE_FAILURE:
            return { ...state, fetching: false, employee_name: null, error: action.error };
        default:
            return state;
    }
}
