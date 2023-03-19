import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

let url =
	process.env.REACT_APP_API_ENDPOINT ||
	"https://nps-feedback-ui-production.up.railway.app/api/feedback/";

console.log("fetching from: ", url);

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
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data);
		setFeedback(data);
		setIsLoading(false);
	};

	// deletes feedback item
	const deleteFeedback = async (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			await fetch(`${url}${id}`, {
				method: "DELETE"
			});
			setFeedback(feedback.filter((item) => item._id !== id));
		}
	};

	// update feedback item

	const updateFeedback = async (id, updItem) => {
		console.log(id, updItem);
		const res = await fetch(`${url}${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updItem)
		});

		const data = await res.json();
		console.log(data);

		setFeedback(feedback.map((item) => (item._id === id ? data : item)));

		setFeedbackEdit({
			item: {},
			edit: false
		});
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
		const res = await fetch(
			url,

			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(newFeedback)
			}
		);

		const data = await res.json();
		// console.log(data);

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
