import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeFiled, initializeForm, reg } from "modules/auth"; //action function
import AuthForm from "components/auth/AuthForm";
import { check } from "modules/user";

const RegForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.reg,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  })); // redux에서 상태 데이터 가져오기

  /*
    const { form } = useSelector(({ auth }) => ({
    form: auth.reg,
  }));와 같음

  const form = useSelector(({ auth }) => ({
    auth,
  }));

  console.log(form.auth.reg);
  const {
    auth: { reg },
  } = form;
  console.log(reg);
*/

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeFiled({ form: "reg", key: name, value })); // action 함수 실행
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(reg({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("reg"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/");
      console.log("check API 성공");
      console.log(user);
    }
  }, [navigate, user]);

  return <AuthForm type="reg" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegForm;
