import { render, screen } from "@testing-library/react";
import RatingSelect from "./RatingSelect";
import { FeedbackProvider } from "../context/FeedbackContext";

describe("Unit tests for RatingSelect Component", () => {
	it("Should render 10 li elements inside of a ul", async () => {
		render(
			<FeedbackProvider>
				<RatingSelect />
			</FeedbackProvider>
		);
		const listArr = await screen.findAllByRole("list");
		const ul = screen.getByRole("list");

		expect(ul).toHaveClass("rating");

		listArr.forEach((li) => {
			li.hasAttribute("radio");
		});
	});
	it("Should add the checked attribute on clicked", () => {
		render(
			<FeedbackProvider>
				<RatingSelect />
			</FeedbackProvider>
		);
		const listArr = screen.getAllByRole("list");

		listArr.forEach((li) => {
			li.hasAttribute("checked");
		});
	});
});
