import { combineReducers } from 'redux'
import {reducer} from './reducer'
import {reducer2} from './reducer2'

export const rootReducer = combineReducers({
    reducer,
    reducer2
});

// export default index;

/*export default function(initialData) {
    return function (state, action) {
        if (!state) {
            console.log('no state', initialData);
            return initialData;
        }

        // This is showing state as having expected value
        // console.log('state', state);

        return rootReducer(state, action);
    }
};*/
