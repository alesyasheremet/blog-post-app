import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FaCamera } from "react-icons/fa";
import TextArea from "../stories/TextArea";
import InputField from "../stories/InputField";
import BlogPostCategories from "./BlogPostCategories";
import { RootState } from "../store/store";
import { IBlogPost, RecentBlogPost } from "../types/BlogPost";
import { useAppDispatch } from "../hooks/hook";
import { addBlog } from "../store/blogPostSlice";

const SubmitBlogPost: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_id: "",
    image: null as Blob | null, // Initialize as null
  });

  const [newPost, setNewPost] = useState('');
  const posts = useSelector((state: RootState) => state.blog);
  const dispatch = useAppDispatch();

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
        } as unknown as IBlogPost;
        dispatch(addBlog(newPost));
        setNewPost('');
        // Form submitted successfully, handle the response if needed
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
<div className="min-w-[450p] shadow-md p-6 h-screen relative">
          <form onSubmit={handleSubmit}>
            <div className="flex-grow">
              <InputField
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
                    <FaCamera /> 
                  </label>
                  <span className="hidden">Geen bestand gekozen</span>
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
                >
                  <BlogPostCategories />
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
            
              <button type="submit" className="bottom-0 absolute">Submit</button>
            
          </form>
        </div>
  );
};

export default SubmitBlogPost;
