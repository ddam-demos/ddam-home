const API_URL = "https://multi-chat-dev.ddam.info/api/analysis/answer";

export async function chatBotApiStream({
  project_id,
  question,
  history,
  conversation_id,
}) {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      Authorization: `Bearer ${process.env.CHATBOT_API_TOKEN}`,
    },
    body: JSON.stringify({
      project_id,
      question,
      history,
      conversation_id,
    }),
  });
  return response;
}
