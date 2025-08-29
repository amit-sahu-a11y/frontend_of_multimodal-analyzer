export async function analyzeData(text, file) {
  const formData = new FormData();
  formData.append("text", text);
  if (file) formData.append("image", file);

  const res = await fetch("https://4fc6dfa955f1.ngrok-free.app/analyze", {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    throw new Error("Failed to analyze input");
  }
  return await res.json();
}
