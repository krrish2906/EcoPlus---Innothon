import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts : []
}

export const postsSlice = createSlice({
    name : "posts",
    initialState,
    reducers:{
        addPost : (state,action)=>{
            state.posts.push(action.payload)
        },
        deletePost : (state,action)=>{
            state.posts = state.posts.filter(post => post._id !== action.payload)
        },
        updatePost : (state,action)=>{
            state.posts = state.posts.map(post => post._id === action.payload._id ? action.payload : post)
        },
        getAllPosts : (state,action)=>{
            state.posts = action.payload
        },
        searchPostFilter : (state,action)=>{
            state.posts = action.payload
        },
        communityPostFilter : (state,action)=>{
            state.posts = action.payload
        },
        resetPosts : (state)=>{
            state.posts = []
        }
    }
})

export const { addPost, deletePost, updatePost, getAllPosts, searchPostFilter, communityPostFilter, resetPosts } = postsSlice.actions;

export default postsSlice.reducer;
