import { useMutation } from "@tanstack/react-query";
import { createList, deleteList, updateList } from "../api/lists";

export const useCreateList = (boardId) => {
  return useMutation({
    mutationFn: (data) => createList(boardId, data),
  });
};

export const useUpdateList = (listId) => {
  return useMutation({
    mutationFn: (data) => updateList(listId, data),
  });
};

export const useDeleteList = (listId) => {
  return useMutation({
    mutationFn: () => deleteList(listId),
  });
};
