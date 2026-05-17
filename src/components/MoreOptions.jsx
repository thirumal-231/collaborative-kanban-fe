import React, { useState } from "react";
import { Cross, Plus, Trash2 } from "lucide-react";
import { useDeleteList, useUpdateList } from "../hooks/useLists";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CgCross } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

export default function MoreOptions({ cancelRename, boardId, listId, title }) {
  const [renameTitle, setRenameTitle] = useState(title);

  const { mutate: updateList } = useUpdateList(listId);
  const { mutate: deleteList } = useDeleteList(listId);

  const queryClient = useQueryClient();

  const handleRename = () => {
    updateList(
      { title: renameTitle },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["fullBoard", boardId],
          });
          cancelRename();
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "Something went wrong");
        },
      },
    );
  };

  const handleRemoveList = () => {
    deleteList(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["fullBoard", boardId],
        });
        cancelRename();
        toast.success("List deleted");
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      },
    });
  };

  return (
    <div className="rounded-2xl">
      <div className="flex items-center justify-between">
        <input
          type="text"
          value={renameTitle}
          placeholder="List name"
          className="w-full rounded-md bg-transparent px-2 py-1 text-xl font-semibold text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setRenameTitle(e.target.value)}
          onBlur={handleRename}
        />

        <button
          type="button"
          className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
          aria-label="Delete list"
        >
          <Trash2 size={20} onClick={() => handleRemoveList()} />
        </button>
        <button
          type="button"
          className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
          aria-label="Delete list"
        >
          <IoCloseSharp size={20} onClick={() => cancelRename()} />
        </button>
      </div>
    </div>
  );
}
