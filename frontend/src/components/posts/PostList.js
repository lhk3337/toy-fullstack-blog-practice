import React from "react";
import styled from "styled-components";
import Responsive from "components/common/Responsive";
import Button from "components/common/Button";
import { palette } from "lib/styles/palette";

const {
  colors: { gray, cyan },
} = palette;

const StyledPostList = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const StyledPostItem = styled.div`
  cursor: pointer;
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${gray["200"]};
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${gray["600"]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const SubInfo = styled.div`
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

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${cyan["700"]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${cyan["600"]};
    }
  }
`;

const PostItem = () => {
  return (
    <StyledPostItem>
      <h2>제목</h2>
      <SubInfo>
        <span>
          <b>username</b>
        </span>
        <span>{new Date().toLocaleDateString()}</span>
      </SubInfo>
      <Tags>
        <div className="tag">태그1</div>
        <div className="tag">태그1</div>
      </Tags>
    </StyledPostItem>
  );
};

const PostList = () => {
  return (
    <StyledPostList>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새글 작성하기
        </Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </StyledPostList>
  );
};

export default PostList;
