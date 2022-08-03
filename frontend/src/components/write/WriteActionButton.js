import React from "react";
import styled from "styled-components";
import Button from "components/common/Button";

const StyledWriteActionButton = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  /* button + button {
    margin-left: 0.5rem;
  } */
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  // & + & : StyledButton이 바로 옆에 붙어있을 때 <StyledButton /> next to <StyledButton /> 여기서는 취소 버튼의 css에 해당
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ onCancel, onPublish, isEdit }) => {
  return (
    <StyledWriteActionButton>
      <StyledButton cyan onClick={onPublish}>
        포스트 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </StyledWriteActionButton>
  );
};

export default WriteActionButton;
