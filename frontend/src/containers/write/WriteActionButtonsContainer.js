import React, { useEffect } from "react";
import WriteActionButton from "components/write/WriteActionButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { writePost } from "modules/write";

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, tags, post, postError } = useSelector(({ write }) => {
    return {
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    };
  });
  const onPublish = () => {
    dispatch(writePost({ title, body, tags }));
  };
  const onCancel = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
