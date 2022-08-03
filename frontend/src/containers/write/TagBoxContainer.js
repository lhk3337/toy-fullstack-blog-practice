import React from "react";
import TagBox from "components/write/TagBox";

import { useDispatch, useSelector } from "react-redux";
import { changeField } from "modules/write";

const TagBoxContainer = () => {
  const dispatch = useDispatch();

  const { tags } = useSelector(({ write }) => {
    return { tags: write.tags };
  });
  const onChangeTags = (nextTags) => {
    dispatch(changeField({ key: "tags", value: nextTags }));
  };
  return <TagBox tags={tags} onChangeTags={onChangeTags} />;
};

export default TagBoxContainer;
