import {
  MoreHorizontal,
  Plus,
  Star,
  Users,
  PanelRight,
  ChevronDown,
  Layout,
  SquareArrowOutUpRight,
} from "lucide-react";
import Card from "../components/Card";
import List from "../components/List";
import AddList from "../components/AddList";
import { useState } from "react";
import { useFullBoard } from "../hooks/useBoards";
import { useParams } from "react-router-dom";

const todo = [
  "Linked List DSA",
  "Inkscape",
  "Book reading",
  "Rooster",
  "Do prompts from script with that gemini water bleed prompt and apply slowly zoom animation",
  "update job portals",
  "Prepare generic cover letter to include with every application",
];

const done = [
  "Apply",
  "DSA Arrays revision",
  "leetcode",
  "SQL",
  "Tru kanban",
  "AWS CLF-C02",
  "React query course",
  "Prepare resume",
];

const truKanban = [
  "Board view",
  "Disable od create no clickable component for dummy boards",
];

export default function Board() {
  const [isAddListClicked, setisAddListClicked] = useState(false);

  const { boardId } = useParams();
  const { data: fullBoard, isPending, isError } = useFullBoard(boardId);

  const toggleAddList = () => {
    setisAddListClicked((prev) => !prev);
  };

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900 text-xl font-semibold text-white">
        Loading your awesome board...
      </div>
    );
  }

  if (isError || !fullBoard) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900 text-xl font-semibold text-red-400">
        Failed to load the board data. Check your backend connection!
      </div>
    );
  }

  return (
    <div
      className="relative h-screen overflow-x-auto overflow-y-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${fullBoard.image})`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/15" />

      {/* TOP BAR */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/20 px-6 py-4 backdrop-blur-md">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-white">{fullBoard.title}</h1>

          <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white backdrop-blur-sm">
            <Layout size={18} />
            <ChevronDown size={16} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20">
            <PanelRight size={18} />
          </button>

          <button className="rounded-lg bg-white/10 p-2 text-yellow-300 backdrop-blur-sm transition hover:bg-white/20">
            <Star size={18} fill="currentColor" />
          </button>

          <button className="rounded-lg bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20">
            <Users size={18} />
          </button>

          {/* AVATARS */}
          <div className="flex -space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-cyan-500 font-bold text-white">
              TI
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-600 font-bold text-white">
              PR
            </div>
          </div>

          <button className="rounded-xl bg-white px-5 py-2.5 font-semibold text-gray-800 shadow-md transition hover:bg-gray-100">
            Share
          </button>

          <button className="rounded-lg bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </header>

      {/* BOARD */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] gap-3 overflow-x-auto px-4 py-5">
        {fullBoard.lists &&
          Object.entries(fullBoard.lists).map(([listId, listData]) => (
            <List
              boardId={boardId}
              listId={listData.id}
              key={listId}
              title={listData.title}
              cards={listData.cards}
            />
          ))}

        {/* ADD LIST */}
        {!isAddListClicked && (
          <button
            className="h-fit min-w-[300px] rounded-xl bg-white/20 px-5 py-4 text-left text-xl font-semibold text-white backdrop-blur-md transition hover:bg-white/30"
            onClick={() => toggleAddList()}
          >
            <div className="flex items-center gap-2">
              <Plus size={20} />
              Add a list
            </div>
          </button>
        )}
        {/* Add list form */}
        {isAddListClicked && (
          <div className="h-fit min-w-[300px] rounded-xl bg-white/70 px-2 py-1 text-left text-xl font-semibold text-white backdrop-blur-md">
            <AddList closeAddList={toggleAddList} />
          </div>
        )}
      </div>
    </div>
  );
}
