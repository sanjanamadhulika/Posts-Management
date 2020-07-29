import * as actions from './postActions'
import * as types from './postTypes'

describe('actions', () => {
    it('update the post', () => {
        const post = {
            id: 1,
            title: 'This is updated test title',
            body: 'This is updated test body'
        }
        const expectedAction = {
            type: types.POST_UPDATED,
            payload: post
        }
        expect(actions.postUpdated(post)).toEqual(expectedAction)
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
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
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