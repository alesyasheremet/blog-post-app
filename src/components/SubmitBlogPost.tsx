import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FaCamera } from "react-icons/fa";
import TextArea from "../stories/TextArea";
import InputField from "../stories/InputField";
import { IBlogPost, ICategory } from "../types/BlogPost";
import { useAppDispatch } from "../hooks/hook";
import { addBlog } from "../store/blogPostSlice";
import Dropdown, { DropDownOptions } from "../stories/DropDown";
import { BlogPostService } from "../services/BlogPostService";

const defaultCategories: ICategory[] = [];

const SubmitBlogPost: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category_id: "",
    image: null as Blob | null, // Initialize as null
  });

  const postService = new BlogPostService();
  const [newPost, setNewPost] = useState('');
  const dispatch = useAppDispatch();
  const [categories, setCategories] = useState(defaultCategories);
  const dropdownOptions: DropDownOptions[] = [];
  const loadCategories = async () => {
    try {
      const categories = await postService.fetchCategories();
      setCategories(categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []); 

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
<>
          <form onSubmit={handleSubmit}>
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
                <Dropdown label="Categorie" id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  key={formData.category_id}
                  onChange={handleInputChange}
                  options={categories as DropDownOptions[]}/>
              <TextArea
                value={formData.content}
                label="Bericht"
                onChange={handleInputChange}
                id="content"
                name="content"
              />
              <div className="flex justify-center items-center">
              <button type="submit" className="bottom-0 absolute bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300">Submit</button>
              </div>
          </form>
        </>
  );
};

export default SubmitBlogPost;
