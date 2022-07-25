import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, { createRequestActionTypes } from "lib/createRequestSaga";
import * as authAPI from "lib/api/auth";

// =============================== Action Types =================================================
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [REG, REG_SUCCESS, REG_FAILURE] = createRequestActionTypes("auth/REG");
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes("auth/LOGIN");

// =============================== Action Types =================================================

// =============================== Action Function ==============================================
export const changeFiled = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const reg = createAction(REG, ({ username, password }) => ({ username, password }));
export const login = createAction(LOGIN, ({ username, password }) => ({ username, password }));
// =============================== Action Function ==============================================

// ================================== Redux Saga ================================================
const regSaga = createRequestSaga(REG, authAPI.reg);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REG, regSaga);
  // takeLatest : 액션이 dispatch될때  이전에 실행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(LOGIN, loginSaga);
}
// ================================== Redux Saga ================================================

const initialState = {
  reg: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      /*
      immer 라이브러리 
      produce(currentState, draft => {function})
      state : 업데이트 하고자 하는 현재 상태값
      draft : 현재 상태값을 복사하여 적용
      produce inner function : 어떻게 업데이트 할지 정의하는 함수
      */
      produce(state, (draft) => {
        draft[form][key] = value; // state.form.key = value
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [REG_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
