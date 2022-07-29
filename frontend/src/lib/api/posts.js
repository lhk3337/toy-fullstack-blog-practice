import clientApi from "./client";
export const writePost = ({ title, body, tags }) => {
  return clientApi.post("/api/posts", { title, body, tags });
};
