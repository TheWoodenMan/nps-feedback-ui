const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
	{
		rating: {
			type: Number,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
