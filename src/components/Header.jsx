import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor, textDecoration }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
		textDecoration: textDecoration
	};
	return (
		<header style={headerStyles}>
			<div className="container">
				<Link to="/">
					<h2>{text}</h2>
				</Link>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: "Feedback UI",
	bgColor: "rgba(0,0,0,0.4)",
	textColor: "#ff6a95",
	textDecoration: "none"
};

Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
	textDecoration: PropTypes.string
};

export default Header;
