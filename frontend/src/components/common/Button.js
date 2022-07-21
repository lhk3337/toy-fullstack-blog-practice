import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
const { white, gray } = palette;

const StyledBtn = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  color: ${white};
  cursor: pointer;
  background-color: ${gray["800"]};
  &:hover {
    background-color: ${gray["500"]};
  }
`;

const Button = (props) => {
  //   console.log({ ...props }); // PostListPage Component에서 Button Component의 property 모든 정보를 가져옴, { children: '버튼'}
  return <StyledBtn {...props} />;
};

export default Button;
