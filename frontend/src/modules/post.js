import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "lib/api/posts";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes("post/READ_POST");
const UNLOAD_POST = "post/UNLOAD_POST";

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, postAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => {
      return { ...state, post };
    },
    [READ_POST_FAILURE]: (state, { payload: error }) => {
      return { ...state, error };
    },
    [UNLOAD_POST]: () => {
      return initialState;
    },
  },
  initialState
);
export default post;
