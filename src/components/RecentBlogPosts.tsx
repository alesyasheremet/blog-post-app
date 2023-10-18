import React from "react";
import { IBlogPost } from "../types/BlogPost";
import { selectBlogs } from '../store/blogPostSlice';
import { useSelector } from "react-redux";
interface RecentBlogPostsProps {
  blogs: IBlogPost[];
}

const RecentBlogPosts: React.FC<RecentBlogPostsProps> = ({ blogs }) => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
{blogs.map((item: any) => (
              <div className="shadow-md">
                <img className="w-full" src="/assets/blogpost.png" />
                <div className="p-4">
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <div className="p-4"></div>
                  <div className="text-xs">{item.content}</div>
                </div>
              </div>
            ))}
    </div>
  );
};

export default RecentBlogPosts;
