import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: "653e42d6-a83d-4577-a51b-77dc59d8129e",
			text: "This is an example feedback item 1",
			rating: 10
		},
		{
			id: "0ec67f98-0584-4fcf-9a8e-629b38e8e687",
			text: "This is an example feedback item 2",
			rating: 7
		},
		{
			id: "be21b73d-8af7-4d55-9f88-eb5b80dacf29",
			text: "This is an example feedback item 3",
			rating: 9
		}
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	});

	// deletes feedback item
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// update feedback item

	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		);
	};

	// set item to be updated.
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		});
	};

	// adds feedback item
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
