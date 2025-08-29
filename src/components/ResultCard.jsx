import React from "react";
export default function ResultCard({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Latest Analysis Result</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Text Sentiment:</strong> {JSON.stringify(data.text_sentiment)}</p>
          <p><strong>Summary:</strong> {data.text_summary}</p>
          <p><strong>Topic:</strong> {data.topic}</p>
        </div>
        <div>
          <p><strong>Image Classification:</strong> {data.image_classification}</p>
          <p><strong>OCR Text:</strong> {data.ocr_text || "None"}</p>
          <p><strong>Toxicity Score:</strong> {data.toxicity_score}</p>
        </div>
      </div>
      <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
        <strong>Automated Response:</strong> {data.automated_response}
      </div>
    </div>
  );
}
