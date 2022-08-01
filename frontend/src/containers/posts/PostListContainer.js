import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "modules/posts";

import { useSearchParams, useParams } from "react-router-dom";

import PostList from "components/posts/PostList";

const PostListContainer = () => {
  const dispatch = useDispatch();

  const { username } = useParams();
  const [searchParams] = useSearchParams();
  // const [query, setQuery] = useSearchParams(), useState와 비슷한 용법

  const { posts, error, loading, user } = useSelector(({ posts, loading, user }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading["posts/LIST_POSTS"],
    user: user.user,
  }));

  useEffect(() => {
    const tag = searchParams.get("tag");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, searchParams, username]);

  return <PostList loading={loading} error={error} posts={posts} showWriteButton={user} />;
};

export default PostListContainer;
