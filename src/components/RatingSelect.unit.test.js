import { render, screen, renderHook, fireEvent } from "@testing-library/react";
import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import { FeedbackProvider } from "../context/FeedbackContext";
import userEvent from "@testing-library/user-event";

describe("Unit tests for Header Component", () => {
	it("Should render 10 li elements inside of a ul", async () => {
		render(
			<FeedbackProvider>
				<RatingSelect />
			</FeedbackProvider>
		);
		const listArr = await screen.findAllByRole("list");

		listArr.forEach((li) => {
			li.hasAttribute("radio");
		});
	});
	it("Should add the checked attribute on clicked", async () => {
		render(
			<FeedbackProvider>
				<RatingSelect />
			</FeedbackProvider>
		);
		const listArr = await screen.findAllByRole("list");

		listArr.forEach((li) => {
			userEvent.click(li);
			li.hasAttribute("checked");
		});
	});
});
