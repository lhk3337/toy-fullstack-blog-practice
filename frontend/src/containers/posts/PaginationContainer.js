import React from "react";
import Pagination from "components/posts/Pagination";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();
  const { username } = useParams();
  const tag = searchParams.get("tag");
  // page가 없으면 1을 기본값으로 사용
  // const page = parseInt(searchParams.get("page"), 10) || 1;

  const { lastPage, posts, loading, response } = useSelector(({ posts, loading }) => {
    return {
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading["posts/LIST_POSTS"],
      response: posts.response,
    };
  });
  const page = () => {
    if (lastPage === 0) {
      return parseInt(searchParams.get("page"), 10) || 0;
    } else {
      return parseInt(searchParams.get("page"), 10) || 1;
    }
  };
  if (!posts || loading) {
    return null;
  }

  return <Pagination tag={tag} username={username} page={parseInt(page(), 10)} lastPage={lastPage} />;
};

export default PaginationContainer;
