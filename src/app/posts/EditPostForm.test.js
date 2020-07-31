import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import EditPostForm from "./EditPostForm";
import configureStore from "redux-mock-store";

const mockStore = configureStore({});
const post1title = "This is the title given by user with id 1";
const post1body = "This is the body given by user with id 1";
const posts = [
    {
        userId: 1,
        id: 1,
        title: post1title,
        body: post1body,
    },
    {
        userId: 1,
        id: 2,
        title: "This is the title given by user with id 2",
        body: "This is the body given by user with id 2",
    },
    {
        userId: 1,
        id: 3,
        title: "This is the title given by person with id 3",
        body: "This is the body given by person with id 3",
    },
];

const data = {
    actualPosts: posts,
    status: "succeeded",
    error: null,
};

describe("Test Edit posts form component", () => {
    let dummyStore;
    let componentToRender;

    beforeEach(() => {
        dummyStore = mockStore(data);
        componentToRender = (
            <Provider store={dummyStore}>
                <EditPostForm match={{ params: { postId: 1 } }} />
            </Provider>
        );
    });

    it("should render edit component correctly", () => {
        const { queryByTestId, queryByPlaceholderText } = render(componentToRender);

        expect(queryByPlaceholderText("Enter Title")).toBeTruthy();
        expect(queryByTestId("postBody")).toBeTruthy();
        expect(queryByTestId("get-body-button")).toBeTruthy();
        expect(queryByTestId("save-post-button")).toBeTruthy();
    });

    it("should handle onGetBodyClicked method", () => {
        const { queryAllByTestId, queryByTestId, queryByPlaceholderText } = render(componentToRender);

        const searchInput = queryByPlaceholderText("Enter Title");
        fireEvent.change(searchInput, { target: { value: post1title } });

        // input should contain the search text now
        expect(searchInput.value).toBe(post1title);

        // we are expecting 1 options in the auto complete suggestions
        const autoCompleteOptions = queryAllByTestId("auto-complete");
        expect(autoCompleteOptions.length).toBe(1);

        // Checking if we are getting correct body
        fireEvent.change(searchInput, { target: { value: post1title } });
        fireEvent.click(queryByTestId("get-body-button"));
        expect(queryByTestId("postBody").value).toBe(post1body);
    });
});