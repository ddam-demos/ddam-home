import React, { useState, useEffect, useRef } from "react";
import IconSend from "./IconSend";
import IconClose from "./IconClose";
import { chatBotApiStream } from "./api";

function generateRandomString() {
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let randomString = "";

	for (let i = 0; i < 8; i++) {
		randomString += charset.charAt(Math.floor(Math.random() * charset.length));
	}

	return randomString;
}

export default function ChatbotWidget({
	pulse,
	chatbotApiKey,
	title,
	botAvatarSrc,
	userAvatarSrc,
	welcomeText,
	inputPlaceholder,
	chatWidth,
	chatHeight,
}) {
	const [conversationId] = useState(generateRandomString());
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [currentMsg, setCurrentMsg] = useState("");
	const [loading, setLoading] = useState(false);

	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView();
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages, currentMsg]);

	useEffect(() => {
		welcomeText && addBotMessage(welcomeText);
	}, [welcomeText]);

	const addBotMessage = (text) => {
		setMessages((prevMessages) => [...prevMessages, { author: "bot", text }]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (input.trim() === "") return;
		setLoading(true);
		setMessages((prevMessages) => [...prevMessages, { author: "user", text: input.trim() }]);
		setInput("");
		try {
			const response = await chatBotApiStream({
				question: input.trim(),
				history: getHistory(),
				conversation_id: conversationId,
				project_id: 277,
			});

			const data = response.body;
			if (!data) {
				return;
			}
			const reader = data.getReader();
			const decoder = new TextDecoder();
			let done = false;
			let msgFull = "";
			setLoading(false);
			while (!done) {
				const { value, done: doneReading } = await reader.read();
				done = doneReading;
				const chunkValue = decoder.decode(value);
				if (msgFull.indexOf("^") === -1) {
					msgFull += chunkValue;
					setCurrentMsg((prev) => prev + chunkValue);
				}
			}
			let imageFilteredMsg = msgFull.split("^");
			addBotMessage(imageFilteredMsg[0]);
			scrollToBottom();
		} catch (error) {
			addBotMessage("There was an error.");
		} finally {
			setCurrentMsg("");
			setLoading(false);
		}
	};

	const getHistory = () => {
		let history = [];
		for (let i = 0; i < messages.length; i += 2) {
			if (i + 1 < messages.length) history.push([messages[i].text, messages[i + 1].text]);
		}
		return history;
	};

	return (
		<div
			style={{
				bottom: 60,
				right: 0,
				maxWidth: "calc(100% - 48px)",
				position: "fixed",
				marginRight: "1.5rem",
				marginBottom: "1.5rem",
				zIndex: 999999,
				color: "black",
				fontSize: "0.875rem",
			}}>
			{!isOpen && (
				<div
					style={{
						width: "4rem",
						height: "4rem",
					}}
					onClick={() => setIsOpen(true)}>
					<img
						src="/bot.png"
						alt="open chat"
						style={{
							borderRadius: "9999px",
							boxShadow:
								"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
						}}
					/>
				</div>
			)}
			{isOpen && (
				<div
					style={{
						width: chatWidth,
						maxWidth: "100%",
						backgroundColor: "white",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
						padding: "1rem",
						borderRadius: "0.5rem",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "0.75rem",
						}}>
						<p
							style={{
								color: "rgba(107, 114, 128)",
								fontWeight: "600",
								fontSize: "1rem",
							}}>
							{title}
						</p>
						<div
							style={{
								backgroundColor: "rgba(229, 231, 235)",
								color: "rgba(107, 114, 128)",
								padding: "0.5rem",
								borderRadius: "9999px",
								display: "flex"
							}}
							onClick={() => setIsOpen(false)}>
							<IconClose
								style={{
									width: "1rem",
									height: "1rem",
								}}
							/>
						</div>
					</div>
					<ul
						style={{
							height: chatHeight,
							backgroundColor: "rgba(243, 244, 246)",
							padding: "0.75rem",
							overflowY: "scroll",
							borderRadius: "0.25rem",
						}}>
						{messages.map((message, index) => (
							<li
								key={index}
								style={{
									marginBottom: "0.75rem",
									display: "flex",
									alignItems: "start",
									justifyContent:
										message.author === "bot" ? "flex-start" : "flex-end",
								}}>
								{message.author === "bot" && (
									<img
										src="/bot2.png"
										alt="bot avatar"
										style={{
											width: "2.5rem",
											height: "2.5rem",
											marginRight: "0.5rem",
											borderRadius: "9999px",
										}}
									/>
								)}
								<div
									style={{
										padding: "0.5rem",
										display: "inline-block",
										borderRadius: "0.25rem",
										whiteSpace: "break-spaces",
										backgroundColor:
											message.author === "bot"
												? "rgba(229, 231, 235)"
												: "rgba(219, 234, 254)",
									}}>
									{message.text}
								</div>
								{message.author === "user" && (
									<img
										src={userAvatarSrc}
										alt="user avatar"
										style={{
											width: "2.5rem",
											height: "2.5rem",
											marginLeft: "0.5rem",
											borderRadius: "9999px",
										}}
									/>
								)}
							</li>
						))}
						{loading ? (
							<div style={{ display: "flex" }}>
								<img
									src={botAvatarSrc}
									alt="bot avatar"
									style={{
										width: "2.5rem",
										height: "2.5rem",
										marginRight: "0.5rem",
										borderRadius: "9999px",
									}}
								/>
								<div className="loading-dots">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						) : currentMsg !== "" ? (
							<li
								style={{
									color: "rgba(107, 114, 128)",
									marginBottom: "0.75rem",
									display: "flex",
									alignItems: "start",
									justifyContent: "flex-start",
								}}>
								<img
									src="/bot2.png"
									alt="bot avatar"
									style={{
										width: "2.5rem",
										height: "2.5rem",
										marginRight: "0.5rem",
										borderRadius: "9999px",
									}}
								/>
								<div
									style={{
										padding: "0.5rem",
										display: "inline-block",
										borderRadius: "0.25rem",
										backgroundColor: "rgba(229, 231, 235)",
										whiteSpace: "break-spaces",
									}}>
									{currentMsg}
								</div>
							</li>
						) : null}
						<li ref={messagesEndRef}></li>
					</ul>
					<form
						onSubmit={handleSubmit}
						style={{
							marginTop: "0.75rem",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<input
							type="text"
							style={{
								width: "100%",
								borderColor: "rgba(209, 213, 219)",
								borderWidth: "1px",
								borderStyle: "solid",
								padding: "0.5rem",
								borderRadius: "0.25rem",
								outline: "none",
							}}
							placeholder={inputPlaceholder}
							value={input}
							disabled={loading || currentMsg !== ""}
							onChange={(e) => setInput(e.target.value)}
							spellCheck={false}
						/>
						<button
							style={{
								backgroundColor: "#4B5563",
								opacity: "1",
								color: "white",
								padding: "0.5rem",
								marginLeft: "0.5rem",
								borderRadius: "0.25rem",
								outline: "none",
								width: "3rem",
								height: "2.5rem",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
							type="submit">
							<IconSend style={{ width: "1rem", height: "1rem" }} />
						</button>
					</form>
				</div>
			)}
		</div>
	);
}

ChatbotWidget.defaultProps = {
	title: "DDAM AI Chat",
	chatbotApiKey: null,
	botAvatarSrc: "/bot2.png",
	userAvatarSrc: "/user.svg",
	// welcomeText: "👋 Welcome! How can I help you today?",
	welcomeText:
		"Hey there! 😃 I'm the friendly and cool DDAM-er chatbot, ready to help you with any recruitment-related questions. If you're interested in joining our talented team of engineers, feel free to ask away! If I don't know the answer, I promise to make you smile instead. Let's chat!",
	inputPlaceholder: "Type your question",
	chatWidth: 480,
	chatHeight: 300,
};
