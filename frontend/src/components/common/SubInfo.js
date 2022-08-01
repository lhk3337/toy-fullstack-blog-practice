import React from "react";
import styled, { css } from "styled-components";
import { palette } from "lib/styles/palette";
import { Link } from "react-router-dom";
const {
  colors: { gray },
} = palette;
const StyledSubInfo = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${gray["600"]};

  span + span:before {
    color: ${gray["400"]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
  }
  b {
    font-weight: bold;
  }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <StyledSubInfo hasMarginTop={hasMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledSubInfo>
  );
};

export default SubInfo;
