import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";

function AboutPage() {
	return (
		<Card>
			<div>
				<h1>About This Project</h1>
				<p>
					This is a small React App to show implementation of a simple but
					effective NPS Feedback UI for surveying any product or service built
					in React.
				</p>
				<p>
					<strong>NPS</strong> or <strong>Net Promoter Score</strong> is a
					valuable tool which can help business leaders to gather customer
					feedback and identify key features and attributes.
				</p>
				<p>
					When you know what your customers like, dislike, must-have or are
					excited by, you can give them more or less respectively improving your
					performance.
				</p>
				<br />
				<p>
					<strong>Version 1.0.0</strong>
				</p>
				<p>
					<Link to="/">
						<FaHouseUser className="home-icon" size={30} />
					</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
