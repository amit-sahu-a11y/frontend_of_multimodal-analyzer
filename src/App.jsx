import React from "react";
import { useState } from "react";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import ChatHistory from "./components/ChatHistory";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Multimodal Analyzer
      </h1>
      <UploadBox setResults={setResults} />
      <ChatHistory results={results} />
      {results.length > 0 && (
        <ResultCard data={results[results.length - 1]} />
      )}
    </div>
  );
}

export default App;
