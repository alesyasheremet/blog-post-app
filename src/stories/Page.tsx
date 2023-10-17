import React, { useEffect, useState } from "react";

import { Header } from "./Header";
import "./page.css";
import GridComponent from "./GridWithCards";
import {
  BlogPostService,
  IBlogPost,
  ICategory,
  IResponse,
} from "../services/BlogPostService";
import { Button } from "./Button";
import BlogPostSubmitForm from "./BlogPostSubmitForm";
import InputText from "./InputText";
import Dropdown from "./DropDown";
import TextArea from "./TextArea";
import { FaCamera } from "react-icons/fa";

const defaultPosts: IBlogPost[] = [];
const defaultCategories: ICategory[] = [];
const postService = new BlogPostService();

const handleCancelClick = () => {
  postService.cancelRequest();
};

export const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_id: "",
    image: null as Blob | null, // Initialize as null
  });

  const [posts, setPosts] = useState(defaultPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState(defaultCategories);
  const postService = new BlogPostService();
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Set the number of items per page
  const loadPosts = async () => {
    try {
      const fetchedPosts = await postService.fetchPosts(page, itemsPerPage);
      const categories = await postService.fetchCategories();
      setCategories(categories);
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile =
      e.target.files != null && e.target.files.length > 0
        ? e.target.files[0]
        : null;
    if (imageFile != null) {
      setFormData({ ...formData, image: imageFile });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("category_id", formData.category_id);
    formDataToSend.append("image", formData.image as Blob);
    try {
      const response = await fetch(
        "https://frontend-case-api.sbdev.nl/api/posts",
        {
          method: "POST",
          headers: {
            token: "pj11daaQRz7zUIH56B9Z",
          },
          body: formDataToSend,
        },
      );
      if (response.ok) {
        const newPost = {
          title: formData.title,
          content: formData.content,
          category_id: formData.category_id,
          image: null,
        };
        setPosts([...posts, newPost as unknown as IBlogPost]);
        // Form submitted successfully, handle the response if needed
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <div className="min-w-[450p] shadow-md p-6 h-screen calc(100vh - 20%)">
          <form onSubmit={handleSubmit}>
            <div className="flex-grow">
              <InputText
                label="Berichtnaam"
                value={formData.title}
                onChange={handleInputChange}
                id="title"
                name="title"
              />
              <div>
                <label htmlFor="image">Image:</label>
                <div className="text-gray-500">
                  <label htmlFor="image" className="cursor-pointer">
                    <FaCamera /> Upload Image
                  </label>
                  <span className="hidden inline">Upload Image</span>
                  <span className="hidden">Choose File</span>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageUpload}
                    className="inset-0"
                  />
                </div>
              </div>
              <label htmlFor="category">Category:</label>
              <div className="text-gray-500">
                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  key={formData.category_id}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 text-gray-600 text-sm italic placeholder-grey-500 bg-gray-100"
                  placeholder="--"
                >
                  <option value="">Geen categorie</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <TextArea
                value={formData.content}
                label="Bericht"
                onChange={handleInputChange}
                id="content"
                name="content"
              />
            </div>
            <div className="self-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className="sm:w-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {posts.map((item: any) => (
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
          <div className="">
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
