import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, { createRequestActionTypes } from "lib/createRequestSaga";
import * as authAPI from "lib/api/auth";

// =============================== Action Types ======================================
const TEMP_SET_USER = "user/TEMP_SET_USER";

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes("user/CHECK");
// =============================== Action Types ======================================

// =============================== Action Function ===================================
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
// =============================== Action Function ===================================

// ================================== Redux Saga =====================================
const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}
// ================================== Redux Saga =====================================

const initialState = { user: null, checkError: null };

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({ ...state, user, checkError: null }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({ ...state, user: null, checkError: error }),
  },
  initialState
);

export default user;
