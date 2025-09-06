"use client";

import { useState } from "react";

export default function Prompt() {
  const [query, setQuery] = useState("");


  return (
    <div className="w-full fixed bottom-0 left-0 flex justify-center bg-white border-t border-gray-200 px-4 py-3">
      <div className="w-full max-w-2xl flex gap-2">
        <input
          type="text"
          placeholder="create a chess application..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
