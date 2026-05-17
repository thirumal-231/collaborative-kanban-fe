export default function AddCard({ closeCard }) {
  return (
    <div className="mt-1 space-y-2">
      {/* INPUT CARD */}
      <div className="rounded-md border border-gray-300 bg-white shadow-sm ">
        <textarea
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
