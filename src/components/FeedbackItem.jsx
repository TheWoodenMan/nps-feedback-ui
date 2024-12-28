import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext.js";

function FeedbackItem({ item }) {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

	return (
		<Card className="card" key={item._id.toString()}>
			<div className="num-display">{item.rating}</div>
			<button className="close" onClick={() => deleteFeedback(item._id)}>
				<FaTimes color="purple" />
			</button>
			<button className="edit" onClick={() => editFeedback(item)}>
				<FaEdit color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

export default FeedbackItem;
