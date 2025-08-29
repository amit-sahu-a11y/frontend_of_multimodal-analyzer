import React from "react";
import { useState } from "react";
import { analyzeData } from "../api";

export default function UploadBox({ setResults }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!text && !file) {
      setError("Please enter text or upload an image.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const result = await analyzeData(text, file);
      setResults(prev => [...prev, result]);
      setText("");
      setFile(null);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4">
      <textarea
        className="w-full border p-2 mb-2 rounded"
        placeholder="Enter text..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        className="mb-2"
        onChange={e => setFile(e.target.files[0])}
      />
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}
