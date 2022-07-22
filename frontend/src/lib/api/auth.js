import clientApi from "./client";
export const login = ({ username, password }) => clientApi.post("/api/auth/login", { username, password });
//post방식이고, /api/auth/login일때 {username, password}의 데이터를 보냄

export const register = ({ username, password }) => clientApi.post("/api/auth/register", { username, password });

export const check = () => clientApi.get("/api/auth/check");
