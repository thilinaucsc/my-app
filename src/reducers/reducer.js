import * as types from '../constants/actionTypes';

const initialState = {
    fetching: false,
    dog: null,
    error: null
};



export function reducer(state = initialState, action) {
    // console.log('work reducer 1: ', );
    switch (action.type) {
        case types.API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case types.API_CALL_SUCCESS:
            return { ...state, fetching: false, dog: action.dog };
        case types.API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error };
        default:
            return state;
    }
}
