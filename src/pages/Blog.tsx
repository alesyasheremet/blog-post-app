import React, { useState, useEffect } from "react";
import {
  BlogPostService,
} from "../services/BlogPostService";
import { Paginate } from "../stories/Paginate";
import { useNavigate, useParams } from 'react-router-dom';
import { IBlogPost } from "../types/BlogPost";
import RecentBlogPosts from "../components/DisplayBlogPosts";
import DisplayBlogPosts from "../components/DisplayBlogPosts";

const defaultPosts: IBlogPost[] = [];


const Blog: React.FC<{}> = ({ }) => {
  const [posts, setPosts] = useState(defaultPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const postService = new BlogPostService();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8; // Set the number of items per page
  const history = useNavigate();
  const { page } = useParams();

  const fetchData = async (page: number) => {
    try {
      const response = await postService.fetchPosts(page, itemsPerPage);
      if (response) {
        setTotalPages(Math.ceil(response.total / 8));
        setPosts(response.data); // Append new posts to the existing list
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (selected: any) => {
    history(`/archive/page/${selected.selected + 1}`);
    setCurrentPage(selected.selected + 1);
  };

  return (
    <div className="p-10">
      <div className="grid md:grid-cols-4 gap-6 p-6">
        <DisplayBlogPosts blogs={posts}/>
      </div>
      <Paginate 
        onPageChange={(e) => handlePageChange(e)}
        pageCount={totalPages}
      />
    </div>
  );
};

export default Blog;
