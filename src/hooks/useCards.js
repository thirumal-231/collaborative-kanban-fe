import { useMutation } from "@tanstack/react-query";
import { createCard, deleteCard, updateCard } from "../api/cards";

export const useCreateCard = (listId) => {
  return useMutation({
    mutationFn: (data) => createCard(listId, data),
  });
};

export const useUpdateCard = (cardId) => {
  return useMutation({
    mutationFn: (data) => updateCard(cardId, data),
  });
};

export const useDeleteCard = (cardId) => {
  return useMutation({
    mutationFn: () => deleteCard(cardId),
  });
};
