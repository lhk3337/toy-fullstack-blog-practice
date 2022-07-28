import React, { useEffect, useCallback } from "react";
import Editor from "components/write/Editor";

import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/write";

const EditContainer = () => {
  const dispatch = useDispatch();

  const { title, body } = useSelector(({ write }) => {
    return { title: write.title, body: write.body };
  });

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  /*
    const onChangeField = useCallback((payload) => console.log(dispatch(changeField(payload))), [dispatch]);
    onChangeField({key: 'body, value: 'aaa'});
        {
            payload: {key: 'body', value: 'aaa'}
            type: "write/CHANGE_FIELD"
        }
    */

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditContainer;
