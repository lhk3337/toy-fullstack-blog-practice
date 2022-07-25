import React from "react";
import styled from "styled-components";

const StyledResponsive = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  // ...rest : props가 children뺀 나머지 props을 일컫음
  return <StyledResponsive {...rest}>{children}</StyledResponsive>;
};

export default Responsive;
