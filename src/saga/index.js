import { watcherSaga } from './watcherSagaFetchDog';
import { watcherSaga2 } from './watcherSagaFetchDog2';
import { all, fork } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([
    fork(watcherSaga),
    fork(watcherSaga2)
  ]);
}
