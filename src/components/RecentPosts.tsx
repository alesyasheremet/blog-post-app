// src/components/RecentPosts.tsx
import React from "react";
import { BlogPost } from "../blogPostData";

interface RecentPostsProps {
  blogData: BlogPost[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ blogData }) => {
  const recentPosts = blogData.filter((post) => post.id <= 2);

  return (
    <div>
      <h2>Recent Blog Posts</h2>
      {recentPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
