import { FaTimes } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ handleDelete, item }) {
	const [rating, setRating] = useState(item.rating);
	const [text, setText] = useState(item.text);

	return (
		<Card className="card" key={item.id}>
			<div className="num-display">{item.rating}</div>
			<button className="close" onClick={() => handleDelete(item.id)}>
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{text}</div>
		</Card>
	);
}

export default FeedbackItem;
