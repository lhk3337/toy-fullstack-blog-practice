import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

export const changeFiled = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

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
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({ ...state, [form]: initialState[form] }),
  },
  initialState
);

export default auth;
