import qs from "qs";
import clientApi from "./client";
export const writePost = ({ title, body, tags }) => {
  return clientApi.post("/api/posts", { title, body, tags });
};

export const readPost = (id) => clientApi.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({ page, username, tag });
  return clientApi.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  clientApi.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = (id) => clientApi.delete(`/api/posts/${id}`);
