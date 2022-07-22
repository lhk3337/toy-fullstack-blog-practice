import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFiled, initializeForm } from "modules/auth"; //action function
import AuthForm from "components/auth/AuthForm";

const RegForm = () => {
  const dispatch = useDispatch();

  const { form } = useSelector(({ auth }) => ({
    form: auth.reg,
  })); // redux에서 상태 데이터 가져오기

  /*
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
  };

  useEffect(() => {
    dispatch(initializeForm("reg"));
  }, [dispatch]);

  return <AuthForm type="reg" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegForm;
