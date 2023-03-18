const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const feedbackRoutes = require("./routes/feedback");

require("dotenv").config({ path: "server/config/.env" });
const SERVER_PORT = process.env.PORT || 8000;

const dbName = process.env.DB_NAME;
const dbString = process.env.DB_STRING;
const buildpath = __dirname + "/build/";
var corsOptions = {
	origin: "http://localhost:3000"
};

app.use(express.static(buildpath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors(corsOptions));

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

app.use("/api", feedbackRoutes);

app.get("/", (req, res) => {
	res.sendFile(buildpath + "index.html");
});

app.listen(SERVER_PORT, () => {
	console.log(`Server running on port ${SERVER_PORT}`);
});
