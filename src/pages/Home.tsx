import React, { useEffect, useState } from "react";

import {
  BlogPostService,
} from "../services/BlogPostService";
import { Button } from "../stories/Button";
import RecentBlogPosts from "../components/RecentBlogPosts";
import SubmitBlogPost from "../components/SubmitBlogPost";
import { IBlogPost } from "../types/BlogPost";

const defaultPosts: IBlogPost[] = [];
const postService = new BlogPostService();

const handleCancelClick = () => {
  postService.cancelRequest();
};

export const Home: React.FC = () => {
  const [posts, setPosts] = useState(defaultPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const postService = new BlogPostService();
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Set the number of items per page
  const loadPosts = async () => {
    try {
      const fetchedPosts = await postService.fetchPosts(page, itemsPerPage);
      const categories = await postService.fetchCategories();
      setPosts([...posts, ...fetchedPosts.data]); // Append new posts to the existing list
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [page]); // Fetch new page when page state changes

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="min-w-[450p] shadow-md p-6 h-screen relative">
          <SubmitBlogPost></SubmitBlogPost>
        </div>

        <div className="sm:w-auto shadow-md h-screen relative">
            <RecentBlogPosts blogs={posts}/>
          <div className="bottom-0">
            <Button
              label="Laad meer"
              onClick={() => handlePageChange(page + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;