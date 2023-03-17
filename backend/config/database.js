const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/config/.env" });

let dbConnectorStr = process.env.DB_STRING || process.env["DB_STRING"],
	connectDB = async () => {
		try {
			const conn = await mongoose.connect(dbConnectorStr, {
				dbName: process.env.DB_NAME
			});

			console.log(`MongoDB Connected: ${conn.connection.host}`);
		} catch (err) {
			console.error(err);
			process.exit(1);
		}
	};

module.exports = connectDB;
