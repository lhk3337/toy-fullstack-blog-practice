import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import { Link } from "react-router-dom";
const {
  colors: { gray, white },
} = palette;

const StyledAuthTemplate = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${gray["200"]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: ${white};
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <StyledAuthTemplate>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </StyledAuthTemplate>
  );
};

export default AuthTemplate;
