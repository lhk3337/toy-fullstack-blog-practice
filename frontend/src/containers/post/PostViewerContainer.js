import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "modules/post";
import { useParams, useNavigate } from "react-router-dom";
import PostViewer from "components/post/PostViewer";
import PostActionButtons from "components/post/PostActionButtons";
import { setOriginalPost } from "modules/write";

const PostViewerContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { postId } = useParams();

  // Router.js 의 <Route path=":postId" element={<PostPage />} />
  const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
    user: user.user,
    //  [action.payload]: true -> [action.payload]: false
  }));
  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate("/write");
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
    />
  );
};

export default PostViewerContainer;
