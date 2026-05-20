import { useQueryClient } from "@tanstack/react-query";
import { Star, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDeleteBoard, useUpdateBoard } from "../hooks/useBoards";
import { useState } from "react";

export default function BoardCard({ id, title, image, color }) {
  const [renameTitle, setRenameTitle] = useState(title);

  const { mutate: updateBoard } = useUpdateBoard(id);
  const { mutate: deleteBoard } = useDeleteBoard(id);

  const queryClient = useQueryClient();

  function Clickk() {
    console.log("X clicked.");
  }

  const handleDeleteBoard = () => {
    deleteBoard(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["boards"],
        });
        toast.success("Board deleted");
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      },
    });
  };

  const handleRenameBoard = () => {
    updateBoard(
      { title: renameTitle },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["boards"],
          });
          //   cancelRename();
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "Something went wrong");
        },
      },
    );
  };

  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`relative h-20 w-full overflow-hidden ${
          color ? `bg-gradient-to-r ${color}` : ""
        }`}
      >
        <Link to={`${id}`}>
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}
        </Link>

        {/* {starred && (
          <button className="absolute right-2 top-2 rounded-full bg-black/30 p-1 text-white backdrop-blur-sm">
          <Star className="h-4 w-4 fill-white" />
          </button>
          )} */}
      </div>

      <div className="p-3 flex items-center justify-between">
        <input
          className="line-clamp-2 text-sm font-medium w-full"
          value={renameTitle}
          onChange={(e) => setRenameTitle(e.target.value)}
          onBlur={handleRenameBoard}
        />
        <button
          type="button"
          className="
      pointer-events-none
      flex items-center justify-center
      rounded-lg
      text-gray-500
      opacity-0
      transition-all
      duration-200
      group-hover:pointer-events-auto
      group-hover:opacity-100
      hover:bg-red-50
      hover:text-red-500
      hover:cursor-pointer
    "
          aria-label="Delete card"
          onClick={handleDeleteBoard}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
