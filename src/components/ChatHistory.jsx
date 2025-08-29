import React from "react";
export default function ChatHistory({ results }) {
  if (results.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Conversation History</h2>
      <div className="max-h-64 overflow-y-auto space-y-2">
        {results.map((res, idx) => (
          <div
            key={idx}
            className="border rounded p-2 text-sm bg-gray-50"
          >
            <div className="font-bold">Entry {idx + 1}:</div>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(res, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
