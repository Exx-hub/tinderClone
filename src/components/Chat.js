import React from "react";
import "../styles/Chat.css";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

function Chat({ url, name, text, timestamp }) {
	return (
		<Link to={`/chat/${name}`}>
			<div className="chat">
				<Avatar src={url} />
				<div className="chat__details">
					<h4>{name}</h4>
					<p>{text}</p>
				</div>
				<p>{timestamp}</p>
			</div>
		</Link>
	);
}

export default Chat;
