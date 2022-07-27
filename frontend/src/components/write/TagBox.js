import React from "react";
import styled from "styled-components";
import { palette } from "lib/styles/palette";

const {
  colors: { gray, white, teal },
  sizes: { full },
} = palette;

const StyledTagBox = styled.div`
  width: ${full};
  border-top: 1px solid ${gray["200"]};
  padding-top: 2rem;
  h4 {
    color: ${gray["800"]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${gray["900"]}; /* 스타일 초기화 */
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${gray["800"]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${gray["600"]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 1rem;
  margin-top: 0.7rem;
  font-weight: 600;
  color: ${white};
  background-color: ${teal["600"]};
  border-radius: 20px;
  padding: 0.725rem 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledTagList = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

const TagList = React.memo(({ tags }) => (
  <StyledTagList>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} />
    ))}
  </StyledTagList>
));

const TagBox = () => {
  return (
    <StyledTagBox>
      <h4>태그</h4>
      <TagForm>
        <input placeholder="태그를 입력하세요" />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={["태그1", "태그2", "태그3"]} />
    </StyledTagBox>
  );
};

export default TagBox;
