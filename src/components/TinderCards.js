import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "../firebase";
import "../styles/TinderCards.css";

function TinderCards() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const unsubscribe = db.collection("people").onSnapshot((snapshot) => {
			setPeople(
				snapshot.docs.map((doc) => {
					return { id: doc.id, data: doc.data() };
				})
			);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						key={person.id}
						className="swipe"
						preventSwipe={["up", "down"]}
					>
						<div
							className="card"
							style={{ backgroundImage: `url(${person.data.url})` }}
						>
							<h3>
								{person.data.name}, {person.data.age}
							</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
