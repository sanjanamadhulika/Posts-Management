import { createStore } from "redux";

import postReducer from "./postReducer";
import { fetchPostRequest, fetchPostSuccess, fetchPostFaliure } from "./postActions";

const store = createStore(postReducer);

export const fetchPosts = () => {
    store.dispatch(fetchPostRequest());

    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(data => {
            store.dispatch(fetchPostSuccess(data))
        })
        .catch(error => {
            store.dispatch(fetchPostFaliure(error))
        })
}

export default store;
