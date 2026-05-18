import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const createCard = async (listId, data) => {
  const res = await api.post(`/lists/${listId}/cards`, data);
  return res.data;
};

export const updateCard = async (cardId, data) => {
  const res = await api.patch(`/cards/${cardId}`, data);
  return res.data;
};

export const deleteCard = async (cardId) => {
  const res = await api.delete(`/cards/${cardId}`);
  return res.data;
};
