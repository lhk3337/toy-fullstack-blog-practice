import React from "react";
import styled, { css } from "styled-components";
import { palette } from "lib/styles/palette";
const { white, gray } = palette;

const StyledBtn = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: ${white};
  cursor: pointer;
  background-color: ${gray["800"]};
  &:hover {
    background-color: ${gray["600"]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan["500"]};
      &:hover {
        background: ${palette.cyan["400"]};
      }
    `}
`;

const Button = (props) => {
  //   console.log({ ...props }); // PostListPage Component에서 Button Component의 property 모든 정보를 가져옴, { children: '버튼'}
  return <StyledBtn {...props} />;
};

export default Button;
