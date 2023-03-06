import { FaTimes } from "react-icons/fa";
import React from "react";
import Card from "./shared/Card";

function FeedbackItem({ handleDelete, item }) {
	return (
		<Card className="card" key={item.id}>
			<div className="num-display">{item.rating}</div>
			<button className="close" onClick={() => handleDelete(item.id)}>
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

export default FeedbackItem;
