import { useQuery } from "@tanstack/react-query";
import { getBoards, getFullBoard } from "../api/boards";

export const useBoards = () => {
  return useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });
};

export const useFullBoard = (boardId) => {
  return useQuery({
    queryKey: ["fullBoard", boardId],
    queryFn: () => getFullBoard(boardId),
    enabled: !!boardId,
  });
};
