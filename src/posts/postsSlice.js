import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  actualPosts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.json();
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated(state, action) {
      const { id, title, body } = action.payload
      const existingPost = state.actualPosts.find(post => post.id == id)
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.actualPosts = state.actualPosts.concat(action.payload)
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    }
  },
})

export const postUpdated = postsSlice.actions.postUpdated;
export default postsSlice.reducer;