import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeFiled, initializeForm, login } from "modules/auth"; //action function
import AuthForm from "components/auth/AuthForm";
import { check } from "modules/user";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  })); // redux에서 상태 데이터 가져오기

  /* 
     const form = useSelector(({ auth }) => ({
       auth,
     }));
     console.log(form.auth.login);
     const {
       auth: { login },
     } = form;
     console.log(login);
*/

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeFiled({ form: "login", key: name, value })); // action 함수 실행
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류");
      console.log(authError);
      setError("로그인 실패");
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />;
};

export default LoginForm;
