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
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsibWFuYWdlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJtYW5hZ2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjI0MyJ9fQ.frXq87YBTlYl7NThLKx6ZP-8uOTcFKZytaZStwRWGb4",
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
