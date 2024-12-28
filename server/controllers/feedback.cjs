const Feedback = require("../models/Feedback.cjs");
const { ObjectId } = require("mongodb");

module.exports = {
	fetchFeedback: async (req, res) => {
		try {
			const feedback = await Feedback.find().sort({ "rating": -1 });
			res.send(JSON.stringify(feedback));
			console.log("feedback found")
		} catch (err) {
			console.log("feedback found")
			throw new Error(err);
		}
	},

	addFeedback: async (req, res) => {
		const body = req.body;

		try {
			const feedback = await Feedback.create({
				_id: new ObjectId(),
				rating: body.rating,
				text: body.text
				
			});
			console.log("feedback added")
			feedback.save().then((response) => {
				res.status(200);
				res.json(response);
			});
		} catch (err) {
			console.log("feedback not added")
			throw new Error(err);

		}
	},

	deleteFeedback: async (req, res) => {
		const id = req.params.id;

		try {
			await Feedback.findByIdAndDelete({ _id: id });
			res.status(200);
			res.json({ "status": `Feedback id: ${id} deleted` });
		} catch (err) {
			throw new Error(err);
		}
	},

	updateFeedback: async (req, res) => {
		const id = req.params.id;
		const body = req.body;

		try {
			await Feedback.findByIdAndUpdate(id, {
				rating: body.rating,
				text: body.text
			});
		} catch (err) {
			throw new Error(err);
		}
	}
};
