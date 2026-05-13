import { CheckCircle2 } from "lucide-react";

export default function Card({ text, completed }) {
  return (
    <div className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm transition hover:bg-gray-50">
      <div className="flex items-start gap-2">
        {completed && (
          <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-600" />
        )}

        {/* TEXT AREA STYLE */}
        <div className="max-h-28 flex-1 overflow-y-auto">
          <p className="break-words text-[14px] leading-6 text-gray-800">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
