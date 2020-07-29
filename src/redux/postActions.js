import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FALIURE,
    POST_UPDATED
} from "./postTypes";

export const postUpdated = (editedPost) => {
    return {
        type: POST_UPDATED,
        payload: editedPost,
    }
}
export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST,
    };
};

export const fetchPostSuccess = (actualPosts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: actualPosts,
    };
};

export const fetchPostFaliure = (error) => {
    return {
        type: FETCH_POST_FALIURE,
        payload: error,
    };
};