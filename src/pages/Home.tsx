import React, { useEffect, useState } from "react";

import { BlogPostService } from "../services/BlogPostService";
import SubmitBlogPost from "../components/SubmitBlogPost";
import { fetchBlogs, selectBlogs } from "../store/blogPostSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hook";
import DisplayBlogPosts from "../components/DisplayBlogPosts";
import { Footer } from "../stories/Footer";

const postService = new BlogPostService();

const handleCancelClick = () => {
  postService.cancelRequest();
};

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  //  const [posts, setPosts] = useState(defaultPosts);
  const blogs = useSelector(selectBlogs);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Set the number of items per page

  useEffect(() => {
    dispatch(fetchBlogs(page, itemsPerPage));
  }, [page]); // Fetch new page when page state changes

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="p-6 ">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="min-w-[40%] shadow-md p-6 relative max-h-[90vh]">
            <SubmitBlogPost></SubmitBlogPost>
          </div>
          <div className="sm:w-auto shadow-md relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <DisplayBlogPosts blogs={blogs} />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="font-bold bottom-0 static bg-[#E95E30] text-white py-2 p-4 rounded-full focus:outline-none min-w-[20%]"
                onClick={() => handlePageChange(page + 1)}
              >
                Laad meer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
