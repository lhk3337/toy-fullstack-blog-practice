import React from "react";
import styled, { css } from "styled-components";
import { palette } from "lib/styles/palette";
const {
  colors: { gray, cyan, pink },
} = palette;

const StyledPostActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: ${gray["600"]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${gray["100"]};
    color: ${cyan["700"]};
  }
  ${(props) =>
    props.delBtnStyle &&
    css`
      &:hover {
        color: ${pink["500"]};
      }
    `}
  & + & {
    margin-left: 0.8rem;
  }
`;

const PostActionButtons = ({ onEdit }) => {
  return (
    <StyledPostActionButtons>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton delBtnStyle>삭제</ActionButton>
    </StyledPostActionButtons>
  );
};

export default PostActionButtons;
