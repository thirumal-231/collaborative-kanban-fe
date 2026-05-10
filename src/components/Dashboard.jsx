import { useState } from "react";
import { Search, Bell, HelpCircle, User } from "lucide-react";
import Logo from "./Logo";

const initialData = {
  todo: [
    "Tru kanban",
    "This weekend searching and sorting revision",
    "Linked List DSA",
    "Inkscape",
    "Book reading",
    "JJK one episode each",
    "Resident alien netflix",
    "JJK manga read",
    "Chainsaw man",
    "Prepare resume",
  ],
  done: [
    "Apply",
    "AWS CLF-C02",
    "SQL",
    "React router course",
    "Netcode tutorial",
  ],
};

export default function Dashboard() {
  const [data, setData] = useState(initialData);
  const [newCard, setNewCard] = useState("");

  const addCard = (list) => {
    if (!newCard.trim()) return;

    setData((prev) => ({
      ...prev,
      [list]: [...prev[list], newCard],
    }));

    setNewCard("");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 🔵 TOP GLOBAL NAV */}
      <div className="bg-slate-700 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <div className="flex items-center gap-2 bg-slate-600 px-3 py-1 rounded-md w-[40%]">
          <Search size={16} />
          <input
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-slate-600 px-3 py-1 rounded-md text-sm">
            Create
          </button>
          <Bell size={18} />
          <HelpCircle size={18} />
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm">
            TI
          </div>
        </div>
      </div>

      {/* 🟣 BOARD NAV */}
      <div className="bg-white/20 backdrop-blur-md px-4 py-2 flex items-center justify-between">
        <div className="text-white font-semibold">ToDo</div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs">
              TI
            </div>
            <div className="w-7 h-7 bg-indigo-500 rounded-full text-white flex items-center justify-center text-xs">
              PR
            </div>
          </div>

          <button className="bg-white text-black px-3 py-1 rounded-md text-sm">
            Share
          </button>
        </div>
      </div>

      {/* 🌊 BOARD CONTENT */}
      <div
        className="flex-1 bg-cover bg-center p-4 overflow-x-auto"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="flex gap-4">
          <Column
            title="To do"
            items={data.todo}
            newCard={newCard}
            setNewCard={setNewCard}
            onAdd={() => addCard("todo")}
          />

          <Column title="Done" items={data.done} done />

          <div className="min-w-[250px] h-fit bg-white/20 text-white p-4 rounded-xl opacity-80 hover:opacity-100 cursor-pointer">
            + Add another list
          </div>
        </div>
      </div>
    </div>
  );
}

function Column({ title, items, newCard, setNewCard, onAdd, done }) {
  return (
    <div className="min-w-[250px] bg-white/90 rounded-xl p-3 shadow-md">
      <div className="font-semibold mb-2 flex justify-between">
        {title}
        <span className="text-gray-400 cursor-pointer">⋯</span>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded-md shadow-sm hover:bg-gray-50 transition cursor-pointer"
          >
            {done && "✅ "} {item}
          </div>
        ))}
      </div>

      {!done && (
        <div className="mt-3">
          <input
            value={newCard}
            onChange={(e) => setNewCard(e.target.value)}
            placeholder="Add a card..."
            className="w-full p-2 text-sm border rounded-md mb-2 focus:outline-none"
          />
          <button
            onClick={onAdd}
            className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600"
          >
            Add card
          </button>
        </div>
      )}
    </div>
  );
}
