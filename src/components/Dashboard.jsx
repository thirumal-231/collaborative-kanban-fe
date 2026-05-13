import {
  Bell,
  ChevronDown,
  LayoutGrid,
  Search,
  Settings,
  Star,
  User,
  Plus,
  Home,
  PanelsTopLeft,
  Sparkles,
  Users,
  HelpCircle,
} from "lucide-react";
import CreateBoard from "./CreateBoard";
import { useState } from "react";
import BoardCard from "./BoardCard";
import { useCreateBoard } from "../hooks/useCreateBoard";
import toast from "react-hot-toast";
import { useBoards } from "../hooks/useBoards";
import { useQueryClient } from "@tanstack/react-query";

export default function Dashboard() {
  const recentBoards = [
    {
      title: "ToDo",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "TicTacToe",
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "CPP",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Product Ideas",
      image:
        "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const workspaceBoards = [
    {
      title: "Backend Bound: Your Full Stack Web Dev Leap 🚀",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "CPP",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Product Ideas",
      image:
        "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "TicTacToe",
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "ToDo",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();

  const { data: boards = [], isPending, isError } = useBoards();
  const { mutate: createBoard } = useCreateBoard();

  const handleCreateBoard = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    createBoard(data, {
      onSuccess: (res) => {
        toast.success(res.message);
        queryClient.invalidateQueries({ queryKey: ["boards"] });
        setOpen(false);
      },
      onError: (err) => {
        toast.error(err.response.data?.message);
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#172b4d]">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-gray-200 bg-white px-4">
        <div className="flex items-center gap-4">
          <button className="rounded-md p-2 hover:bg-gray-100">
            <LayoutGrid className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-[#0052cc] text-white">
              <PanelsTopLeft className="h-4 w-4" />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              TruKanban
            </span>
          </div>
        </div>

        <div className="mx-6 hidden max-w-2xl flex-1 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search"
              className="h-9 w-full rounded border border-gray-300 bg-white pl-10 pr-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="relative flex items-center gap-3">
          <button
            className="hidden rounded bg-[#0c66e4] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0055cc] md:block"
            onClick={() => setOpen(!open)}
          >
            Create
          </button>
          {open && (
            <form
              onSubmit={handleCreateBoard}
              className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
            >
              {/* HEADER */}
              <div className="border-b border-gray-200 px-5 py-4">
                <h2 className="text-sm font-semibold tracking-wide text-gray-500">
                  Create Board
                </h2>
              </div>

              {/* CONTENT */}
              <div className="space-y-5 p-5">
                {/* Preview */}
                <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400">
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute left-4 top-4 space-y-2">
                    <div className="h-3 w-20 rounded bg-white/80" />
                    <div className="h-3 w-14 rounded bg-white/60" />
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-md bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    New Board
                  </div>
                </div>

                {/* INPUT */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Board Title <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="title"
                    placeholder="Enter board title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  {/* <p className="text-xs text-gray-400">
                    👀 Board titles are visible to all workspace members.
                  </p> */}
                  <label className="text-sm font-medium text-gray-700">
                    Board Image
                  </label>

                  <input
                    type="text"
                    name="image"
                    placeholder="Enter image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0c66e4] py-3 text-sm font-semibold text-white transition hover:bg-[#0055cc] active:scale-[0.98]"
                >
                  Create Board
                </button>
              </div>
            </form>
          )}

          <button className="rounded-md p-2 hover:bg-gray-100">
            <HelpCircle className="h-5 w-5 text-gray-600" />
          </button>

          <button className="rounded-md p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>

          <button className="rounded-md p-2 hover:bg-gray-100">
            <Sparkles className="h-5 w-5 text-gray-600" />
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white">
            TI
          </div>
        </div>
      </header>

      <div className="flex pt-14">
        {/* SIDEBAR */}
        <aside className="hidden min-h-[calc(100vh-56px)] w-[270px] border-r border-gray-200 bg-[#f4f5f7] px-4 py-6 lg:block">
          <div className="space-y-1">
            <SidebarItem
              icon={<PanelsTopLeft className="h-4 w-4" />}
              label="Boards"
              active
            />

            <SidebarItem
              icon={<Plus className="h-4 w-4" />}
              label="Templates"
            />

            <SidebarItem icon={<Home className="h-4 w-4" />} label="Home" />
          </div>

          <div className="my-5 border-t border-gray-300" />

          <div>
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Workspaces
            </p>

            <div className="flex cursor-pointer items-start justify-between rounded-lg p-2 hover:bg-gray-200">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#6554c0] font-bold text-white">
                  T
                </div>

                <div>
                  <p className="text-sm font-semibold">Thirumal isireddy's</p>

                  <p className="text-sm font-semibold">workspace</p>
                </div>
              </div>

              <ChevronDown className="mt-1 h-4 w-4 text-gray-600" />
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-4 py-8 md:px-8 lg:px-14">
          {/* Templates */}
          <section className="mx-auto max-w-4xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h2 className="flex items-center gap-2 text-3xl font-bold">
                  <Plus className="h-6 w-6" />
                  Most popular templates
                </h2>

                <p className="mt-2 text-gray-600">
                  Get going faster with a template from the TruKanban community
                  or choose a category.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <select className="h-11 rounded border border-gray-300 bg-white px-4 text-sm outline-none">
                  <option>choose a category</option>
                </select>

                <button className="rounded-md border border-gray-300 p-2 hover:bg-gray-100">
                  ✕
                </button>
              </div>
            </div>

            <button className="mt-8 text-sm font-medium text-[#0c66e4] hover:underline">
              Browse the full template gallery
            </button>

            {/* My boards */}
            <SectionTitle title="My boards" />
            {isPending && <p>Loading boards...</p>}

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {boards.map((board) => (
                <BoardCard key={board.id} {...board} starred />
              ))}
            </div>

            {/* Recently Viewed */}
            <SectionTitle title="Top Public boards" />

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {recentBoards.map((board, index) => (
                <BoardCard key={index} {...board} />
              ))}
            </div>

            {/* Workspace */}
            <div className="mt-16">
              <h2 className="text-xl font-bold uppercase tracking-wide text-gray-700">
                Your Workspaces
              </h2>

              <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#6554c0] text-lg font-bold text-white">
                    O
                  </div>

                  <h3 className="text-xl font-semibold">Open workspace</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  <WorkspaceButton
                    icon={<PanelsTopLeft className="h-4 w-4" />}
                    label="Boards"
                  />

                  <WorkspaceButton
                    icon={<Users className="h-4 w-4" />}
                    label="Members"
                  />

                  <WorkspaceButton
                    icon={<Settings className="h-4 w-4" />}
                    label="Settings"
                  />

                  <button className="rounded bg-[#eae6ff] px-4 py-2 text-sm font-medium text-[#5e4db2] hover:bg-[#ddd6fe]">
                    Upgrade
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {workspaceBoards.map((board, index) => (
                  <BoardCard key={index} {...board} />
                ))}

                {/* Create Board */}
                <button className="flex h-[120px] flex-col items-center justify-center rounded-lg border border-gray-300 bg-[#ebecf0] transition hover:bg-[#dfe1e6]">
                  <p className="font-medium">Create new board</p>
                  <p className="mt-1 text-sm text-gray-500">5 remaining</p>
                </button>
              </div>

              <button className="mt-8 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100">
                View all closed boards
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-[#dfe9f7] text-[#0c66e4]"
          : "hover:bg-gray-200 text-gray-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="mt-14 flex items-center gap-2">
      <Star className="h-5 w-5" />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
}

function WorkspaceButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100">
      {icon}
      {label}
    </button>
  );
}
