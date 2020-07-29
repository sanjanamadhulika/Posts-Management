import reducer from './postReducer'
import * as actions from './postActions'

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                actualPosts: [],
                status: 'idle',
                error: null
            }
        )
    })

    it('should handle fetch post request', () => {
        expect(
            reducer({}, actions.fetchPostRequest())
        ).toEqual(
            {
                actualPosts: [],
                status: 'loading',
                error: null
            }
        )
    })
    it('should handle fetch post success', () => {
        const posts = [
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
        expect(
            reducer(undefined, actions.fetchPostSuccess(posts))
        ).toEqual(
            {
                actualPosts: posts,
                status: 'succeeded',
                error: null
            }
        )
    })
    it('should handle fetch post failed', () => {
        const error = "Error occured while loading the data"
        expect(
            reducer({}, actions.fetchPostFaliure(error))
        ).toEqual(
            {
                actualPosts: [],
                status: 'failed',
                error: error
            }
        )
    })
    it('should handle updated post', () => {
        const initialState = {
            actualPosts: [{
                userId: 1,
                id: 3,
                title: 'This is existing title',
                body: 'This is exsisting body'
            }],
            status: 'idle',
            error: null
        }
        const updatedPost = {
            userId: 1,
            id: 3,
            title: 'This is updated title',
            body: 'This is updated body'
        }
        expect(
            reducer(initialState, actions.postUpdated(updatedPost))
        ).toEqual(
            {
                actualPosts: [updatedPost],
                status: 'idle',
                error: null
            }
        )
    })
})
