import toast from "react-hot-toast";
import { useCreateList } from "../hooks/useLists";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function AddList({ closeAddList }) {
  const { boardId } = useParams();
  const {
    mutate: createList,
    isPending,
    isSuccess,
    isError,
  } = useCreateList(boardId);

  const queryClient = useQueryClient();

  const handleCreateList = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.title?.trim()) {
      toast.error("Please enter a list title!");
      return;
    }

    createList(data, {
      onSuccess: (res) => {
        toast.success(res.message || "List created successfully");
        queryClient.invalidateQueries(["fullBoard", boardId]);
        closeAddList();
      },
      onError: (err) => {
        toast.error(err.response.data?.message || "Something went wrong");
      },
    });
  };

  return (
    <form onSubmit={handleCreateList}>
      <div className="mt-1 space-y-2">
        {/* INPUT CARD */}
        <div className="rounded-md border border-gray-300 bg-white shadow-sm ">
          <textarea
            placeholder="Enter a list title"
            name="title"
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
          >
            Add list
          </button>

          <button
            type="button"
            className="
            rounded-md
            p-2
            text-gray-500
            transition
            hover:bg-gray-200
            hover:text-gray-700
          "
            onClick={closeAddList}
          >
            ✕
          </button>
        </div>
      </div>
    </form>
  );
}
