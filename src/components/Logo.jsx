import { PanelsTopLeft } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
      <PanelsTopLeft className="h-5 w-5" />
    </div>
  );
}
