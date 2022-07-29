import React from "react";
import EditContainer from "containers/write/EditContainer";
import Responsive from "components/common/Responsive";
import TagBoxContainer from "containers/write/TagBoxContainer";
import WriteActionButton from "components/write/WriteActionButton";

const WritePage = () => {
  return (
    <Responsive>
      <EditContainer />
      <TagBoxContainer />
      <WriteActionButton />
    </Responsive>
  );
};

export default WritePage;
