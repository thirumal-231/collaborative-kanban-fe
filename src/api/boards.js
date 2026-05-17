import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const createBoard = async (data) => {
  const res = await api.post("/boards", data);
  return res.data;
};

export const getBoards = async () => {
  const res = await api.get("/boards");
  return res.data.data;
};

export const getFullBoard = async (boardId) => {
  const res = await api.get(`/boards/${boardId}/full`);
  return res.data.data;
};

// export const signupUser = async (data) => {
//   const res = await api.post("/auth/signup", data);
//   return res.data;
// };

// export const getMe = async () => {
//   const res = await api.get("/auth/me");
//   console.log(res);
//   return res.data.data;
// };
