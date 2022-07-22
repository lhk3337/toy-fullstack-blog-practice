import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFiled, initializeForm } from "modules/auth"; //action function
import AuthForm from "components/auth/AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
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
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
