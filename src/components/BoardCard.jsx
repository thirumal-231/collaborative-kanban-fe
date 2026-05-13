import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function BoardCard({ id, title, image, color }) {
  return (
    <Link to={`${id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white transition hover:-translate-y-1 hover:shadow-lg">
        <div
          className={`relative h-20 w-full overflow-hidden ${
            color ? `bg-gradient-to-r ${color}` : ""
          }`}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          )}

          {/* {starred && (
          <button className="absolute right-2 top-2 rounded-full bg-black/30 p-1 text-white backdrop-blur-sm">
          <Star className="h-4 w-4 fill-white" />
          </button>
          )} */}
        </div>

        <div className="p-3">
          <p className="line-clamp-2 text-sm font-medium">{title}</p>
        </div>
      </div>
    </Link>
  );
}
