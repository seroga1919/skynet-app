/** @format */

import { createSlice } from '@reduxjs/toolkit' /* This lets us access our state trough out all of the application */

const initialState = {
  /* This is the initial state of our application */ mode: 'light',
  user: null,
  token: null,
  posts: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      /* This is a function that changes the mode of the application */
      state.mode =
        state.mode === 'light'
          ? 'dark'
          : 'light' /* If its light change to dark and vice versa */
    },
    setLogin: (state, action) => {
      /* This is a function that changes the state of the user and token */
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      /* This is a function that changes the state of the user and token to null */
      state.user = null
      state.token = null
    },
    setFriends: (state, action) => {
      /* This is a function that changes the state of the friends */
      if (state.user) {
        state.user.friends = action.payload.friends
      } else {
        console.error('user friends non-existent :(')
      }
    },
    setPosts: (state, action) => {
      /* This is a function that changes the state of the posts */
      state.posts = action.payload.posts
    },
    setPost: (state, action) => {
      /* This is a function that changes the state of the posts */
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post
        return post
      })
      state.posts = updatedPosts
    },
  },
})

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  /* This exports the functions */
  authSlice.actions
export default authSlice.reducer
