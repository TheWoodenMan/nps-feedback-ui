import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext);

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
							<FeedbackItem item={item} feedback={feedback} />
						</motion.div>
					</div>
				))}
			</AnimatePresence>
		</div>
	);
}

export default FeedbackList;
