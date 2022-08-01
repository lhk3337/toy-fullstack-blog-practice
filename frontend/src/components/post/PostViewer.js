import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import Responsive from "components/common/Responsive";
const {
  colors: { gray, cyan },
} = palette;
const StyledPostViewer = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${gray["200"]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${gray["600"]};
  b {
    font-weight: bold;
  }
  span + span:before {
    color: ${gray["500"]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: "\\B7";
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

const PostContent = styled.div`
  font-size: 5rem;
  color: ${gray["800"]};
  b {
    font-weight: bold;
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
        <SubInfo>
          <span>
            <b>{user.username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          {tags.map((tag, index) => (
            <div className="tag" key={index}>
              #{tag}
            </div>
          ))}
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </StyledPostViewer>
  );
};

export default PostViewer;
