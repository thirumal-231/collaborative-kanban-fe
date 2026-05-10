import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/auth";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
    staleTime: Infinity,
  });
};
