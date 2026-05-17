import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const createList = async (boardId, data) => {
  const res = await api.post(`/boards/${boardId}/lists`, data);
  return res.data;
};

export const updateList = async (listId, data) => {
  const res = await api.patch(`/lists/${listId}`, data);
  return res.data;
};

export const deleteList = async (listId) => {
  const res = await api.delete(`/lists/${listId}`);
  return res.data;
};

export const getLists = async () => {
  const res = await api.get("/boards/:boardid/lists");
  return res.data.data;
};
