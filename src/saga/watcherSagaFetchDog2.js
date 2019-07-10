import { takeLatest, call, put } from "redux-saga/effects";
import {getEmployee} from "../service/service";
import * as types from '../constants/actionTypes';

// worker saga: makes the api call when watcher saga sees the action
function* watcherSagaFetchDog2() {
    try {
        const response = yield call(getEmployee);
        // console.log('response: ', response);
        const employee = response.data[0];
        console.log('employee: ', employee);

        // dispatch a success action to the store with the new dog
        yield put({ type: types.EMPLOYEE_SUCCESS, employee });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.EMPLOYEE_FAILURE, error });
    }
}

export function* watcherSaga2() {
    // console.log('watcherSaga2 working: ', );
    yield takeLatest(types.EMPLOYEE_REQUEST, watcherSagaFetchDog2);
}

// function that returns api response
/*function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}*/
