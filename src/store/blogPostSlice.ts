// blogSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store"; // Import the RootState type
import { IBlogPost } from "../types/BlogPost";
import { BlogPostService } from "../services/BlogPostService";

interface BlogState {
  blogs: IBlogPost[];
}

const initialState: BlogState = {
  blogs: [],
};

export const fetchBlogs =
  (page: number, perPage: number) => async (dispatch: AppDispatch) => {
    const postService = new BlogPostService();
    try {
      const fetchedPosts = await postService.fetchPosts(page, perPage);
      dispatch(addBlogs(fetchedPosts.data));
    } catch (error) {
      console.error(error);
    }
  };

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<IBlogPost>) => {
      state.blogs.push(action.payload);
    },
    addBlogs: (state, action: PayloadAction<IBlogPost[]>) => {
      state.blogs = [...state.blogs, ...action.payload];
    },
    // ...
  },
});

export const { addBlog, addBlogs } = blogSlice.actions;

export const selectBlogs = (state: RootState) => state.blog.blogs;

export default blogSlice.reducer;
