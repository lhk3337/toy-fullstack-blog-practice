import React from "react";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import Responsive from "components/common/Responsive";
import SubInfo from "components/common/SubInfo";
import Tags from "components/common/Tags";

const {
  colors: { gray },
} = palette;
const StyledPostViewer = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${gray["200"]};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${gray["800"]};
  pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  .ql-indent-1 {
    text-indent: 3.5rem;
  }
  .ql-indent-2 {
    text-indent: 7rem;
  }
  .ql-indent-3 {
    text-indent: 10.5rem;
  }
  .ql-indent-4 {
    text-indent: 14rem;
  }
  .ql-indent-5 {
    text-indent: 17.5rem;
  }
  .ql-indent-6 {
    text-indent: 21rem;
  }
  .ql-indent-7 {
    text-indent: 24.5rem;
  }
  .ql-indent-8 {
    text-indent: 28rem;
  }
  .ql-indent-9 {
    text-indent: 31.5rem;
  }
  .ql-indent-10 {
    text-indent: 32rem;
  }
  .ql-indent-11 {
    text-indent: 35.5rem;
  }
  .ql-indent-12 {
    text-indent: 39rem;
  }
`;
const PostViewer = ({ post, loading, error }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <StyledPostViewer>존재하지 않는 포스트입니다.</StyledPostViewer>;
    }
  }
  if (loading || !post) {
    return null;
  }
  const { title, body, user, publishedDate, tags } = post;

  return (
    <StyledPostViewer>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo username={user.username} publishedDate={publishedDate} hasMarginTop />
        <Tags tags={tags} />
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </StyledPostViewer>
  );
};

export default PostViewer;
