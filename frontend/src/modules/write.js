import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "lib/createRequestSaga";
import * as postApi from "lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD"; // Action Type
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes("write/WRITE_POST");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => {
  return {
    key,
    value,
  };
});
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => {
  return { title, body, tags };
});
// Action Function

const writePostSaga = createRequestSaga(WRITE_POST, postApi.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: "",
  body: "",
  tags: [],
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => {
      return initialState;
    },
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => {
      return { ...state, [key]: value };
    },
    [WRITE_POST]: (state) => {
      return { ...state, post: null, postError: null };
    },
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => {
      return {
        ...state,
        post,
      };
    },
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => {
      return {
        ...state,
        postError,
      };
    },
  },
  initialState
);

export default write;
