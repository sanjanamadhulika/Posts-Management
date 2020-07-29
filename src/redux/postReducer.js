import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FALIURE,
    POST_UPDATED
} from "./postTypes";

const initialState = {
    actualPosts: [],
    status: 'idle',
    error: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_UPDATED:
            const editedPost = action.payload;
            const existingPost = state.actualPosts.find(post => post.id === parseInt(editedPost.id))
            if (existingPost) {
                const copyOfPost = {
                    ...existingPost,
                    title: editedPost.title,
                    body: editedPost.body
                }
                const indexOfExistingPost = state.actualPosts.indexOf(existingPost)
                const copyOfActualPosts = state.actualPosts.slice()
                copyOfActualPosts.splice(indexOfExistingPost, 1, copyOfPost)
                return {
                    actualPosts: copyOfActualPosts,
                    status: state.status,
                    error: state.error
                }
            } else {
                return state;
            }
        case FETCH_POST_REQUEST:
            return {
                actualPosts: [],
                status: 'loading',
                error: null,
            };

        case FETCH_POST_SUCCESS:
            return {
                actualPosts: action.payload,
                status: 'succeeded',
                error: null,
            };
        case FETCH_POST_FALIURE:
            return {
                actualPosts: [],
                status: 'failed',
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;