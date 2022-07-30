import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import Responsive from "components/common/Responsive";
const {
  colors: { gray, cyan },
  sizes: { full },
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
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${gray["600"]};
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
  font-size: 1.3125rem;
  color: ${gray["800"]};
`;
const PostViewer = () => {
  return (
    <StyledPostViewer>
      <PostHead>
        <h1>제목</h1>
        <SubInfo>
          <span>
            <b>testes</b>
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          <div className="tag">태그1</div>
          <div className="tag">태그</div>
          <div className="tag">태그3</div>
        </Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: "<p><b>내용</b>입니다</p>" }} />
    </StyledPostViewer>
  );
};

export default PostViewer;
