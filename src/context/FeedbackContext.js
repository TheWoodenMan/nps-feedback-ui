import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);

	useEffect(() => {
		fetchFeedback();
	}, []);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	});

	// fetch feedback
	const fetchFeedback = async () => {
		// const res = await fetch(`/feedback?_sort=id&_order=desc`); // json-server
		const res = await fetch(`http://localhost:8000/feedback`); // express
		const data = await res.json();
		setFeedback(data);
		setIsLoading(false);
	};

	// deletes feedback item
	const deleteFeedback = async (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			await fetch(`http://localhost:8000/feedback/${id}`, {
				method: "DELETE"
			});
			setFeedback(feedback.filter((item) => item._id !== id));
		}
	};

	// update feedback item

	const updateFeedback = async (id, updItem) => {
		console.log(id);
		const res = await fetch(`http://localhost:8000/feedback/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updItem)
		});
		console.log(updItem);

		const data = await res.json();
		console.log(data);

		setFeedback(
			feedback.map((item) => (item._id === id ? { ...item, ...data } : item))
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
	const addFeedback = async (newFeedback) => {
		const res = await fetch(`http://localhost:8000/feedback`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newFeedback)
		});

		const data = await res.json();

		setFeedback([data, ...feedback]);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
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
