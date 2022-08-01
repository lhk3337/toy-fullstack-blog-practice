import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import Responsive from "./Responsive";
import { palette } from "lib/styles/palette";
const {
  sizes: { full },
} = palette;
const StyledHeader = styled.div`
  position: fixed;
  width: ${full};
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: bold;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <StyledHeader>
        <Wrapper>
          <div className="logo">
            <Link to={"/"}>REACTERS</Link>
          </div>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </StyledHeader>
      <Spacer />
    </>
  );
};

export default Header;
