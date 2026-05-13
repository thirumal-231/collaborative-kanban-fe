import { MoreHorizontal, Plus, SquareArrowOutUpRight } from "lucide-react";
import Card from "./Card";
import AddCard from "./AddCard";

export default function List({ title, cards, completed }) {
  return (
    <div className="h-fit w-[320px] shrink-0 rounded-xl bg-[#ebecf0]/95 p-2 shadow-xl backdrop-blur-sm">
      {/* HEADER */}
      <div className="px-2 mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        <button className="rounded-md p-1 hover:bg-gray-200">
          <MoreHorizontal size={20} className="text-gray-600" />
        </button>
      </div>

      {/* CARDS */}
      <div className="space-y-1">
        {cards.map((card, i) => (
          <Card key={i} text={card} completed={completed} />
        ))}
        <AddCard />
      </div>

      {/* FOOTER */}
      <div className="mt-1 flex items-center justify-between">
        <button className="flex items-center gap-2 rounded-lg px-2 py-2 text-gray-700 transition hover:bg-gray-200">
          <Plus size={18} />
          <span className="font-medium">Add a card</span>
        </button>

        <button className="rounded-md p-2 hover:bg-gray-200">
          <SquareArrowOutUpRight size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
