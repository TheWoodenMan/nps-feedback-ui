import { render, screen, cleanup } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Unit tests for Header Component", () => {
	it("Should render a h2 with the text 'Feedback UI'", () => {
		render(<Header />, { wrapper: BrowserRouter });
		const h2Element = screen.getByRole("heading", { level: 2 });
		expect(h2Element).toBeInTheDocument();
		expect(h2Element).toHaveTextContent("Feedback UI");
	});
});
