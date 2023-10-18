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
                <label htmlFor="image" className="py-3">Header afbeelding</label>
                   <label htmlFor="image" className="cursor-pointer">
                    <div className="w-full flex">
                    <FaCamera className="h-[13px] w-[10%]"/> 
                    <div
  data-te-chip-init
  data-te-ripple-init
  className="w-[30%] mr-4 flex h-[20px] cursor-pointer inline-block min-w-max cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
  data-te-close="true">
  Kies bestand
</div>
</div>
                  </label>
                  
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageUpload}
                    className="opacity-0"
                  />
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
              <button type="submit" className="font-bold bottom-0 absolute bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 min-w-[30%]">Bericht aanmaken</button>
              </div>
          </form>
        </>
  );
};

export default SubmitBlogPost;
