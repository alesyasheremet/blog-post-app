import React, { useEffect, useState } from 'react';

import { Header } from './Header';
import './page.css';
import GridComponent from './GridWithCards';
import { BlogPostService, IBlogPost, IResponse } from '../services/BlogPostService';
import { Button } from './Button';
import BlogPostSubmitForm from './BlogPostSubmitForm';
import InputText from './InputText';
import Dropdown from './DropDown';
import TextArea from './TextArea';
import { FaCamera } from 'react-icons/fa';

const defaultPosts: IBlogPost[]= [];

const postService = new BlogPostService();

const handleCancelClick = () => {
  postService.cancelRequest();
};

export const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category_id: '',
    image: null as Blob | null, // Initialize as null
  });

  const [posts, setPosts] = useState(defaultPosts);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
  const postService = new BlogPostService();
  const [page, setPage] = useState(1);
  const itemsPerPage = 4; // Set the number of items per page
  const loadPosts = async () => {
    try {
      const fetchedPosts = await postService.fetchPosts(page, itemsPerPage);
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
    const imageFile = e.target.files != null && e.target.files.length >0 ? e.target.files[0] : null;
    if (imageFile != null){
    setFormData({ ...formData, image: imageFile });
  }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('category_id', "1");
    formDataToSend.append('image', formData.image as Blob)
    try {
      const response = await fetch('https://frontend-case-api.sbdev.nl/api/posts', {
        method: 'POST',
        headers: {
          "token": "pj11daaQRz7zUIH56B9Z"

        },
        body: formDataToSend,
      });
      if (response.ok) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
  <div className="md:col-start-1 col-end-2 md:col-end-2 shadow-md p-6 h-screen calc(100vh - 16rem) max-w-250">
  
  
  
    
  <form onSubmit={handleSubmit}>

<InputText
  label="Berichtnaam"
  value={formData.title}
  onChange={handleInputChange}
  id="title"
  name="title"
/>
<div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageUpload}
        />
        <div className="text-gray-500">
          <label htmlFor="image" className="cursor-pointer">
            <FaCamera /> Upload Image
          </label>
        </div>
      </div>
<Dropdown
  label='Categories'
  value={formData.category_id} 
  key={formData.category_id} 
  onChange={handleInputChange }
  id="category_id"
  name="category_id"
  options={['a']} />
<TextArea
  value={formData.content} label="Bericht" onChange={handleInputChange}   id="content"
  name="content" />



<button type="submit">Submit</button>


</form>
  
</div>
  <div className="md:col-start-2 shadow-md h-screen calc(100vh - 16rem) flex flex-col"> 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {posts.map((item : any) => (
            <div className="shadow-md">
             <img className="w-full" src="/assets/blogpost.png"/>
              <div className='p-4'>
              <h1 className="text-3xl">{item.title}</h1>
            <p>{item.content}</p>
            </div>
            
          </div>
        ))}

   </div>
   <div className="">

  
  <Button  label='Laad meer' onClick={() => handlePageChange(page + 1)}/>


</div>
   
   </div>
    
    </div>
    </div>

    


  );
};
