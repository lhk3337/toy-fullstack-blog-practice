import React from "react";
import styled, { css } from "styled-components";
import { palette } from "lib/styles/palette";
import { Link } from "react-router-dom";

const { white, gray } = palette;

const buttonStyle = css`
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

const StyledBtn = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  //   console.log({ ...props }); // 다른 Component에서 <Button className="aa">버튼</Button>를 선언할 경우 Component의 property 모든 정보를 가져옴, { className="aa", children: '버튼'}
  return props.to ? <StyledLink {...props} cyan={props.cyan ? 1 : 0} /> : <StyledBtn {...props} />;
};

export default Button;
