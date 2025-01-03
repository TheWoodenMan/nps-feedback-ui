const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const logger = require("morgan");
const feedbackRoutes = require("./routes/feedback.cjs");
require("dotenv").config({ path: "server/config/.env" });
const SERVER_PORT = process.env.PORT || 8000;

const corsRoute =
	process.env.API_ENDPOINT ||
	`https://nps-feedback-ui-production.up.railway.app`;

const dbName = process.env.DB_NAME;
const dbString = process.env.DB_STRING;
const buildpath = __dirname + "/build/";
var corsOptions = {
	origin: corsRoute
};

app.use(express.static(buildpath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors(corsOptions));

const clientP = mongoose
	.connect(dbString)
	.then((m) => m.connection.getClient())
	.then(()=>{
		console.log("Successfully connected to mongoDB")
	}).catch(error=>{
		console.error('MongoDB connection error:', error.message);
	}) 
	

app.use(
	session({
		secret: [process.env.SESSION_SECRET],
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			client: clientP,
			dbName: dbName,
			mongoUrl: process.env.DB_STRING
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
