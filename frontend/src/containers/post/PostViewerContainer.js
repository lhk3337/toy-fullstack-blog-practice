import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "modules/post";
import { useParams } from "react-router-dom";
import PostViewer from "components/post/PostViewer";
const PostViewerContainer = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  // Router.js 의 <Route path=":postId" element={<PostPage />} />
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
    //  [action.payload]: true -> [action.payload]: false
  }));
  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;
