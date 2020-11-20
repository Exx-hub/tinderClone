import React, { useState } from "react";
import "../styles/ChatWindow.css";

import Avatar from "@material-ui/core/Avatar";

function ChatWindow() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			name: "Seo Ye-Ji",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJoB6NZ_0Lh1oV6LXj7VcuzsVFsu63eit6bw&usqp=CAU",
			message: "Anneyong, oppa!",
		},
		{
			name: "Seo Ye-Ji",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJoB6NZ_0Lh1oV6LXj7VcuzsVFsu63eit6bw&usqp=CAU",
			message: "Any plans for tonight?",
		},
		{
			message: "Hello Jagiya!",
		},
		{
			message: "Nothing planned, what's up?",
		},
	]);

	const handleSend = (e) => {
		e.preventDefault();
		setMessages([...messages, { message: input }]);
		setInput("");
	};
	return (
		<div className="chatWindow">
			<h4>YOU MATCHED WITH SEO YE-JI ON 10/23/2020</h4>
			{messages.map((message, index) => (
				<div className="chatWindow__message" key={index}>
					{message.image && (
						<Avatar
							className="chatWindow__avatar"
							alt={message.name}
							src={message.image}
						/>
					)}
					<p
						className={
							message.image
								? "chatWindow__messageFrom"
								: "chatWindow__messageTo"
						}
					>
						{message.message}
					</p>
				</div>
			))}

			<form className="chatWindow__sender">
				<input
					className="chatWindow__input"
					type="text"
					placeholder="Type a message..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					type="submit"
					onClick={handleSend}
					className="chatWindow__button"
				>
					SEND
				</button>
			</form>
		</div>
	);
}

export default ChatWindow;
