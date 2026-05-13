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
import AddCard from "../components/AddCard";
import Card from "../components/Card";
import List from "../components/List";

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
  return (
    <div
      className="relative h-screen overflow-x-auto overflow-y-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/15" />

      {/* TOP BAR */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 bg-black/20 px-6 py-4 backdrop-blur-md">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-white">ToDo</h1>

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
        <List title="To do" cards={todo} />
        <List title="Done" cards={done} completed />
        <List title="TruKanban" cards={truKanban} />

        {/* ADD LIST */}
        <button className="h-fit min-w-[300px] rounded-xl bg-white/20 px-5 py-4 text-left text-xl font-semibold text-white backdrop-blur-md transition hover:bg-white/30">
          <div className="flex items-center gap-2">
            <Plus size={20} />
            Add another list
          </div>
        </button>
      </div>
    </div>
  );
}
