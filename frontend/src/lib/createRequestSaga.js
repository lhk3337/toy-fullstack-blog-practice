import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "modules/loading";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // put : 특정 액션을 dispatch함
    try {
      const response = yield call(request, action.payload); // call : 함수를 동기적 실행
      yield put({
        // put : 특정 액션을 dispatch함
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        // put : 특정 액션을 dispatch함
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // put : 특정 액션을 dispatch함
  };
}

/*
 redux-saga effects function
 put : 특정 액션을 dispatch함
 call : 함수를 동기적 실행
 takeLatest : 액션이 dispatch될때  이전에 실행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
 all : 배열안의 여러 사가를 동시에 실행
*/
