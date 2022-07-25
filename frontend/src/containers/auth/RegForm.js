import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeFiled, initializeForm, reg } from "modules/auth"; //action function
import AuthForm from "components/auth/AuthForm";
import { check } from "modules/user";

const RegForm = () => {
  const [error, setError] = useState(null);
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
    if ([username, password, passwordConfirm].includes("")) {
      setError("모두 입력해주세요");
      return;
    }
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      dispatch(changeFiled({ form: "reg", key: "password", value: "" }));
      dispatch(changeFiled({ form: "reg", key: "passwordConfirm", value: "" }));
      return;
    }
    dispatch(reg({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("reg"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      setError("회원가입 실패");
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

  return <AuthForm type="reg" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />;
};

export default RegForm;
