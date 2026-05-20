import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteBoard,
  getBoards,
  getFullBoard,
  updateBoard,
} from "../api/boards";

export const useBoards = () => {
  return useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
};

export const useUpdateBoard = (boardId) => {
  return useMutation({
    mutationFn: (data) => updateBoard(boardId, data),
  });
};

export const useDeleteBoard = (boardId) => {
  return useMutation({
    mutationFn: () => deleteBoard(boardId),
  });
};

export const useFullBoard = (boardId) => {
  return useQuery({
    queryKey: ["fullBoard", boardId],
    queryFn: () => getFullBoard(boardId),
    enabled: !!boardId,
  });
};
