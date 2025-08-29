export async function analyzeData(text, file) {
  const formData = new FormData();
  formData.append("text", text);
  if (file) formData.append("image", file);

  const res = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    throw new Error("Failed to analyze input");
  }
  return await res.json();
}
