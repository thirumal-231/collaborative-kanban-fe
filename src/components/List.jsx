import { MoreHorizontal, Plus, SquareArrowOutUpRight } from "lucide-react";
import Card from "./Card";
import AddCard from "./AddCard";
import { useState } from "react";
import MoreOptions from "./MoreOptions";

export default function List({ boardId, listId, title, cards, completed }) {
  const [isAddCardClicked, setisAddCardClicked] = useState(false);
  const [isMoreClicked, setisMoreClicked] = useState(false);

  const toggleAddCard = () => {
    setisAddCardClicked((prev) => !prev);
  };

  const toggleMoreOptions = () => {
    setisMoreClicked((prev) => !prev);
  };

  return (
    <div className="h-fit w-[320px] shrink-0 rounded-xl bg-[#ebecf0]/95 p-2 shadow-xl backdrop-blur-sm">
      {/* HEADER */}

      {!isMoreClicked && (
        <div className="px-2 mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

          <button className="rounded-md p-1 hover:bg-gray-200">
            <MoreHorizontal
              size={20}
              className="text-gray-600"
              onClick={() => toggleMoreOptions()}
            />
          </button>
        </div>
      )}

      {isMoreClicked && (
        <MoreOptions
          cancelRename={setisMoreClicked}
          boardId={boardId}
          listId={listId}
          title={title}
        />
      )}

      {/* CARDS */}
      <div className="space-y-1">
        {cards.map((card) => (
          <Card
            cardId={card.id}
            key={card.id}
            text={card.title}
            completed={card.isCompleted}
          />
        ))}
        {isAddCardClicked && (
          <AddCard listId={listId} closeCard={toggleAddCard} />
        )}
      </div>

      {/* FOOTER */}
      {!isAddCardClicked && (
        <div className="mt-1 flex items-center justify-between">
          <button
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-gray-700 transition hover:bg-gray-200"
            onClick={() => toggleAddCard()}
          >
            <Plus size={18} />
            <span className="font-medium">Add a card</span>
          </button>

          <button className="rounded-md p-2 hover:bg-gray-200">
            <SquareArrowOutUpRight size={18} className="text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
}
