import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import { Link } from "react-router-dom";
const {
  colors: { cyan },
} = palette;

const StyledTags = styled.div`
  margin-top: 2rem;
  .tag {
    display: inline-block;
    color: ${cyan["800"]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${cyan["500"]};
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      {tags.map((tag, index) => (
        <Link className="tag" key={index} to={`/?tag=${tag}`}>
          #{tag}
        </Link>
      ))}
    </StyledTags>
  );
};

export default Tags;
