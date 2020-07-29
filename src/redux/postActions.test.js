import * as actions from './postActions'
import * as types from './postTypes'

describe('actions', () => {
    it('update the post', () => {
        const updatedPost = {
            id: 1,
            title: 'This is updated test title',
            body: 'This is updated test body'
        }
        const expectedAction = {
            type: types.POST_UPDATED,
            payload: updatedPost
        }
        expect(actions.postUpdated(updatedPost)).toEqual(expectedAction)
    })
    it('fetching post request', () => {
        const expectedAction = {
            type: types.FETCH_POST_REQUEST
        }
        expect(actions.fetchPostRequest()).toEqual(expectedAction)
    })

    it('fetch post succesfully', () => {
        const actualPosts = [
            {
                userId: 1,
                id: 1,
                title: "This is the title given by user with id 1",
                body: "This is the body given by user with id 1"
            },
            {
                userId: 1,
                id: 2,
                title: "This is the title given by user with id 2",
                body: "This is the body given by user with id 2"
            }
        ]
        const expectedAction = {
            type: types.FETCH_POST_SUCCESS,
            payload: actualPosts
        }
        expect(actions.fetchPostSuccess(actualPosts)).toEqual(expectedAction)
    })

    it('fetching of post failed', () => {
        const error = "Error occured while loading the data"
        const expectedAction = {
            type: types.FETCH_POST_FALIURE,
            payload: error
        }
        expect(actions.fetchPostFaliure(error)).toEqual(expectedAction)
    })
})