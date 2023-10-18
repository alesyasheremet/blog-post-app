import React, { useState, useEffect } from "react";
import {
  BlogPostService,
} from "../services/BlogPostService";
import { Paginate } from "../stories/Paginate";
import { useNavigate, useParams } from 'react-router-dom';
import { IBlogPost } from "../types/BlogPost";

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
      <div className="grid md:grid-cols-4 gap-6 p-6 mx-auto w-88">
        {posts.map((item: any) => (
          <div className="shadow-md" key={item.id}>
            <img className="w-full" src="/assets/blogpost.png" />
            <div className="p-4">
              <h1 className="text-3xl">{item.title}</h1>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <Paginate 
        onPageChange={(e) => handlePageChange(e)}
        pageCount={totalPages}
      />
    </div>
  );
};

export default Blog;
