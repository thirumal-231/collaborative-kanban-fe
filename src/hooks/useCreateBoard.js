import { useMutation } from "@tanstack/react-query";
import { createBoard } from "../api/boards";

export const useCreateBoard = () => {
  return useMutation({
    mutationFn: createBoard,
  });
};
