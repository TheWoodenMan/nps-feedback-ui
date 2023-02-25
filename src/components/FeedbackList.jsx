import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, setFeedback, deleteFeedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}
	const feedbackItems = () => {
		return feedback.map((item) => {
			return (
				<div className="feedback-list">
					<FeedbackItem
						item={item}
						handleDelete={deleteFeedback}
						feedback={feedback}
					/>
				</div>
			);
		});
	};
	return <div>{feedbackItems()}</div>;
}

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		// feedback is an array of objects
		PropTypes.shape({
			// shape of each object
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired
		})
	)
};

export default FeedbackList;
