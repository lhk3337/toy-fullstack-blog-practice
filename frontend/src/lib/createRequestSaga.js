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

      /*
      console.log(response);
        data: {
          username: "qwerty",
          _id: "62de36ff6eb88287812608c6",
          __v: 0,
        },
        status: 200,
        statusText: "OK",
        headers: {
          "access-control-allow-headers": "*",
          "access-control-allow-methods": "*",
          "access-control-allow-origin": "*",
          connection: "close",
          "content-length": "62",
          "content-type": "application/json; charset=utf-8",
          date: "Mon, 25 Jul 2022 06:23:59 GMT",
          vary: "Accept-Encoding",
          "x-powered-by": "Express",
        },
        config: {
          transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
          },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: null,
          },
          headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
          },
          method: "post",
          url: "/api/auth/register",
          data: '{"username":"qwerty","password":"1234"}',
        },
        request: {},
 */

      yield put({
        // put : 특정 액션을 dispatch함
        type: SUCCESS,
        payload: response.data,
        meta: response,
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
