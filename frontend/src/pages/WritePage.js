import React from "react";
import EditContainer from "containers/write/EditContainer";
import Responsive from "components/common/Responsive";
import TagBox from "components/write/TagBox";
import WriteActionButton from "components/write/WriteActionButton";

const WritePage = () => {
  return (
    <Responsive>
      <EditContainer />
      <TagBox />
      <WriteActionButton />
    </Responsive>
  );
};

export default WritePage;
