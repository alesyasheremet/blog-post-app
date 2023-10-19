// actions.ts
import { Action } from "redux";
import { RecentBlogPost } from "../types/BlogPost";

// Define action types
export const ADD_POST = "ADD_POST";

// Define action creators
export interface AddPostAction extends Action {
  type: typeof ADD_POST;
  payload: RecentBlogPost; // The payload is the new post
}
