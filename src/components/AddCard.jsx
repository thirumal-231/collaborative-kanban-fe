import { useState } from "react";
import { useCreateCard } from "../hooks/useCards";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function AddCard({ listId, closeCard }) {
  const { boardId } = useParams();
  const { mutate: createCard, isPending, isError } = useCreateCard(listId);
  const queryClient = useQueryClient();

  const [cardTitle, setCardTitle] = useState("");

  const handleOnCardTitleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddCard();
    }
  };

  const handleAddCard = () => {
    if (!cardTitle?.trim()) {
      toast.error("Please enter a list title!");
      return;
    }

    createCard(
      { title: cardTitle },
      {
        onSuccess: (res) => {
          toast.success(res.message || "List created successfully");
          queryClient.invalidateQueries(["fullBoard", boardId]);
          closeCard();
        },
        onError: (err) => {
          toast.error(err.response.data?.message || "Something went wrong");
        },
      },
    );
  };

  return (
    <div className="mt-1 space-y-2">
      {/* INPUT CARD */}
      <div className="rounded-md border border-gray-300 bg-white shadow-sm ">
        <textarea
          autoFocus
          placeholder="Enter card title"
          rows={3}
          className="
            max-h-40
            min-h-[72px]
            w-full
            resize-none
            overflow-y-auto
            rounded-xl
            bg-transparent
            px-3
            py-2
            text-[15px]
            leading-6
            text-gray-800
            placeholder:text-gray-500
            focus:outline-none
          "
          value={cardTitle}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleOnCardTitleChange(e)}
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2">
        <button
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-blue-700
          "
          onClick={() => handleAddCard()}
        >
          Add card
        </button>

        <button
          className="
            rounded-md
            p-2
            text-gray-500
            transition
            hover:bg-gray-200
            hover:text-gray-700
          "
          onClick={() => closeCard()}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
