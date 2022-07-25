import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import { Link } from "react-router-dom";
import Button from "components/common/Button";

const StyledAuthForm = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    color: ${palette.gray["800"]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray["500"]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray["700"]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: "로그인",
  reg: "회원가입",
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-weight: bold;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "reg" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWidthMarginTop cyan fullWidth>
          {text}
        </ButtonWidthMarginTop>
      </form>
      <Footer>{type === "login" ? <Link to="/reg">회원가입</Link> : <Link to="/login">로그인</Link>}</Footer>
    </StyledAuthForm>
  );
};

export default AuthForm;
