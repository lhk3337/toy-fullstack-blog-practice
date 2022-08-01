import React from "react";
import styled from "styled-components";
import Responsive from "components/common/Responsive";
import Button from "components/common/Button";
import { palette } from "lib/styles/palette";
import SubInfo from "components/common/SubInfo";
import Tags from "components/common/Tags";
import { Link } from "react-router-dom";

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
  width: 100%;
  display: block;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  border: 1px solid ${gray["600"]};
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
    margin-top: 0;
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <StyledPostItem>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo username={user.username} publishedDate={new Date(publishedDate)} />
      <p>{body}</p>
      <Tags tags={tags} />
    </StyledPostItem>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <StyledPostList>에러가 발생했습니다.</StyledPostList>;
  }

  return (
    <StyledPostList>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </StyledPostList>
  );
};

export default PostList;
