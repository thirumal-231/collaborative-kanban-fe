import { useState } from "react";
import { useDeleteCard, useUpdateCard } from "../hooks/useCards";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

export default function Card({ cardId, text, completed }) {
  const { boardId } = useParams();
  const [renameTitle, setRenameTitle] = useState(text);
  const [isCompleted, setIsCompleted] = useState(completed);

  const { mutate: updateCard } = useUpdateCard(cardId);
  const { mutate: deleteCard } = useDeleteCard(cardId);

  const queryClient = useQueryClient();

  function Clickk() {
    console.log("X clicked.");
  }

  const handleDeleteCard = () => {
    deleteCard(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["fullBoard", boardId],
        });
        toast.success("List deleted");
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      },
    });
  };

  const handleCompleteCard = () => {
    const newCompletedValue = !isCompleted;
    setIsCompleted((prev) => (prev = !prev));
    updateCard(
      { title: renameTitle, isCompleted: newCompletedValue },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["fullBoard", boardId],
          });
          //   cancelRename();
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "Something went wrong");
        },
      },
    );
  };

  const handleRenameCard = () => {
    updateCard(
      { title: renameTitle, isCompleted: isCompleted },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["fullBoard", boardId],
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
    <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-1 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-gray-300 hover:shadow-md">
      <div className="flex items-center gap-2">
        {/* STATUS DOT */}
        <button
          className={`
      flex h-4 w-4 shrink-0 items-center justify-center rounded-full
      transition-colors
      ${isCompleted ? "bg-green-600" : "bg-gray-300"}
    `}
          onClick={handleCompleteCard}
        />

        {/* TITLE */}
        <div className="flex-1">
          <input
            className={`
        w-full
        bg-transparent
        text-[14px]
        leading-none
        outline-none
        ${isCompleted ? "text-gray-400 line-through" : "text-gray-800"}
      `}
            value={renameTitle}
            onChange={(e) => setRenameTitle(e.target.value)}
            onBlur={handleRenameCard}
          />
        </div>

        {/* DELETE */}
        <button
          type="button"
          className="
      pointer-events-none
      flex items-center justify-center
      rounded-lg
      p-2
      text-gray-500
      opacity-0
      transition-all
      duration-200
      group-hover:pointer-events-auto
      group-hover:opacity-100
      hover:bg-red-50
      hover:text-red-500
    "
          aria-label="Delete card"
          onClick={handleDeleteCard}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
