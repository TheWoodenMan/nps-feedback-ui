import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, deleteFeedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div>
			<AnimatePresence>
				{feedback.map((item) => (
					<div className="feedback-list">
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem
								item={item}
								handleDelete={deleteFeedback}
								feedback={feedback}
							/>
						</motion.div>
					</div>
				))}
			</AnimatePresence>
		</div>
	);
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
