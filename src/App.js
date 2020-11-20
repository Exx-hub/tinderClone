import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import FooterButtons from "./components/FooterButtons";
import ChatWindow from "./components/ChatWindow";
import ChatPage from "./components/ChatPage";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/chat/:name">
						<Header back="/chat" />
						<ChatWindow />
					</Route>
					<Route path="/chat">
						<Header back="/" />
						<ChatPage />
					</Route>

					<Route path="/">
						<Header />
						<TinderCards />
						<FooterButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
