import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchPosts from "./SearchPosts";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore({});

const posts = [
    {
        userId: 1,
        id: 1,
        title: "This is the title given by user with id 1",
        body: "This is the body given by user with id 1",
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

describe("Test search posts component", () => {
    let dummyStore;
    let componentToRender;

    beforeEach(() => {
        dummyStore = mockStore(data);
        componentToRender = (
            <Provider store={dummyStore}>
                <MemoryRouter>
                    <SearchPosts />
                </MemoryRouter>
            </Provider>
        );
    });

    it("should render search component correctly", () => {
        const { queryByTestId, queryByPlaceholderText } = render(componentToRender);

        expect(queryByTestId("search-button")).toBeTruthy();
        expect(queryByPlaceholderText("Search Title")).toBeTruthy();
    });

    it("should handle change method", () => {
        const { queryAllByTestId, queryByPlaceholderText } = render(componentToRender);

        const searchInput = queryByPlaceholderText("Search Title");
        fireEvent.change(searchInput, { target: { value: "user" } });

        // input should contain the search text now
        expect(searchInput.value).toBe("user");

        // we are expecting 2 options in the auto complete suggestions
        const autoCompleteOptions = queryAllByTestId("auto-complete");
        expect(autoCompleteOptions.length).toBe(2);
    });

    it("should handle click method", () => {
        const { queryAllByTestId, queryByTestId, queryByPlaceholderText } = render(componentToRender);

        const searchInput = queryByPlaceholderText("Search Title");
        fireEvent.change(searchInput, { target: { value: "person" } });

        // input should contain the search text now
        fireEvent.click(queryByTestId("search-button"));

        // we are expecting 1 article to display on the page
        const postListArticle = queryAllByTestId("post-lists");
        expect(postListArticle.length).toBe(1);
    });
});