import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD"; // Action Type

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => {
  return {
    key,
    value,
  };
});
// Action Function

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => {
      return initialState;
    },
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => {
      return { ...state, [key]: value };
    },
  },
  initialState
);

export default write;
