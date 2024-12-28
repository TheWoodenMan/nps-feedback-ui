const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback.cjs");

router.get("/feedback", feedbackController.fetchFeedback);

router.post("/feedback", feedbackController.addFeedback);

router.delete("/feedback/:id", feedbackController.deleteFeedback);

router.put("/feedback/:id", feedbackController.updateFeedback);

module.exports = router;
