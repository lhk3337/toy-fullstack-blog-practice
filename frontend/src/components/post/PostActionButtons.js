import React, { useState } from "react";
import AskRemoveModal from "./AskRemoveModal";
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

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <StyledPostActionButtons>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton delBtnStyle onClick={onRemoveClick}>
          삭제
        </ActionButton>
      </StyledPostActionButtons>
      <AskRemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default PostActionButtons;
