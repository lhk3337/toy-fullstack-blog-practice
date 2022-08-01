import React from "react";
import styled from "styled-components";
import Responsive from "components/common/Responsive";
import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import SubInfo from "components/common/SubInfo";
import Tags from "components/common/Tags";

const {
  colors: { gray },
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

const PostItem = () => {
  return (
    <StyledPostItem>
      <h2>제목</h2>
      <SubInfo username="username" publishedDate={new Date()} />
      <Tags tags={["태그1", "태그2", "태그3"]}>
        <div className="tag">태그1</div>
        <div className="tag">태그1</div>
      </Tags>
      <p>포스트 일부분</p>
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
        {Array(3)
          .fill()
          .map((_, index) => (
            <PostItem key={index} />
          ))}
      </div>
    </StyledPostList>
  );
};

export default PostList;