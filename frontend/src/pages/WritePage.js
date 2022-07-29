import React from "react";
import EditContainer from "containers/write/EditContainer";
import Responsive from "components/common/Responsive";
import TagBoxContainer from "containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "containers/write/WriteActionButtonsContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
