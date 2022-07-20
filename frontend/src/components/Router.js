import React from "react";
import { Routes, Route } from "react-router-dom";

import PostListPage from "pages/PostListPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import WritePage from "pages/WritePage";
import PostPage from "pages/PostPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reg" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage />} /> {/* 부모 경로 localhost:3000/@name */}
        <Route path=":postId" element={<PostPage />} /> {/* 자식 경로 localhost:3000/@name/1234 */}
      </Route>
      {/* <Route path="/@:username/:postId" element={<PostPage />} /> 한줄로 선언하기 V6 */}
    </Routes>
  );
};

export default Routers;
