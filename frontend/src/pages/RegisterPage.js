import React from "react";
import AuthTemplate from "components/auth/AuthTemplate";
import RegForm from "containers/auth/RegForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
