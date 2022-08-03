import React from "react";
import EditContainer from "containers/write/EditContainer";
import Responsive from "components/common/Responsive";
import TagBoxContainer from "containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "containers/write/WriteActionButtonsContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>새글 작성하기 - REACTERS</title>
      </Helmet>
      <EditContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
};

export default WritePage;
