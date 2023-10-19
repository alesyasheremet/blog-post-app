import React from "react";
import { IBlogPost } from "../types/BlogPost";
import Card from "../stories/Card";
interface RecentBlogPostsProps {
  blogs: IBlogPost[];
}

const DisplayBlogPosts: React.FC<RecentBlogPostsProps> = ({ blogs }) => {
  return (
    <>
      {blogs.map((item: any) => (
        <Card title={item.title} content={item.content} />
      ))}
    </>
  );
};

export default DisplayBlogPosts;
