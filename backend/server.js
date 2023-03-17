const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const feedbackRoutes = require("./routes/feedback");

require("dotenv").config({ path: "backend/config/.env" });
const PORT = process.env.PORT;

const dbName = process.env.DB_NAME;
const dbString = process.env.DB_STRING;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

const clientP = mongoose
	.connect(dbString)
	.then((m) => m.connection.getClient());

app.use(
	session({
		secret: [process.env.SESSION_SECRET],
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			clientPromise: clientP,
			dbName: dbName
		})
	})
);

app.use("/", feedbackRoutes);

app.listen(process.env.PORT || 8000, () => {
	console.log(`Server running on port ${PORT}`);
});
