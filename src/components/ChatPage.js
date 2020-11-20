import React from "react";
import "../styles/ChatPage.css";
import Chat from "./Chat";

function ChatPage() {
	return (
		<div className="chatPage">
			<Chat
				url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJoB6NZ_0Lh1oV6LXj7VcuzsVFsu63eit6bw&usqp=CAU"
				name="Seo Ye-Ji"
				text="Hello, handsome!"
				timestamp="25 mins ago"
			/>

			<Chat
				url="https://biographicsworld.com/wp-content/uploads/2019/11/Kim.png"
				name="Kim Ji-Won"
				text="How's it going?!"
				timestamp="1 hour ago"
			/>
			<Chat
				url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBNUjPii6Bvdk7EXK75Q-DK-HfI0R00bWmAg&usqp=CAU"
				name="Bae Suzy"
				text="Anneyong, oppa!"
				timestamp="2 hours ago"
			/>
			<Chat
				url="https://www.asiaone.com/sites/default/files/original_images/Apr2020/20200409_kwon_hwo.jpg"
				name="Kwon Nara"
				text="Oppa!!"
				timestamp="3 hours ago"
			/>
		</div>
	);
}

export default ChatPage;
