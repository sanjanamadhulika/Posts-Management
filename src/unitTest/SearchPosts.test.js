import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';

import SearchPosts from "../posts/SearchPosts";

it("renders correctly", () => {
    const { queryByTestId, queryByPlaceholderText } = render(
        <Provider store={store}>
            <SearchPosts />
        </Provider>)

    expect(queryByTestId('search-button')).toBeTruthy()
    expect(queryByPlaceholderText('Search Title')).toBeTruthy()
})

describe("Input value", () => {
    it("handle change", () => {
        const { queryByPlaceholderText } = render(
            <Provider store={store}>
                <SearchPosts />
            </Provider>
        )
        const searchInput = queryByPlaceholderText('Search Title');
        fireEvent.change(searchInput, { target: { value: "test" } })

        expect(searchInput.value).toBe("test")
    })
})

describe("Search Button", () => {
    it("handle click", () => {
        const { queryByTestId, queryByPlaceholderText } = render(
            <Provider store={store}>
                <SearchPosts />
            </Provider>
        )
        const searchInput = queryByPlaceholderText('Search Title');
        fireEvent.click(queryByTestId('search-button'))
    })
})