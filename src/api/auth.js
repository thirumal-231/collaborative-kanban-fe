import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const signupUser = async (data) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/auth/me");
  console.log(res);
  return res.data.data;
};
