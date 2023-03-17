import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	root
);
