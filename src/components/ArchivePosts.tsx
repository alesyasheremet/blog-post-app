import React, { useState, useEffect } from 'react';
import { BlogPostService, IBlogPost, IResponse } from '../services/BlogPostService';
import { PagingComponent } from '../stories/PagingComponent';

const defaultPosts: IBlogPost[]= [];
interface PageGridProps {
  items: IBlogPost[];
}

interface Page {
  id: number;
  // Other properties you want to display
}

const ArchivePostList: React.FC<PageGridProps> = ({ items }) => {
  const [posts, setPosts] = useState(defaultPosts);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
  const postService = new BlogPostService();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8; // Set the number of items per page
  const loadPosts = async () => {
    try {
      const fetchedPosts = await postService.fetchPosts(page, itemsPerPage);
      setPosts([...posts, ...fetchedPosts.data]); // Append new posts to the existing list
    } catch (error) {
      console.error(error);
    }
  };

  //useEffect(() => {
  //  loadPosts();
  //}, [page]); // Fetch new page when page state changes

  const saySomething = (something: any) => {
    console.log(something);
  }




  const fetchData = async (page: number) => {
    try {
      const response = await postService.fetchPosts(page, itemsPerPage);
      if (response) {
        //setPages(response.pages);
       // setTotalPages(response.totalPages);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  return (
    <div>
<div className="grid md:grid-cols-4 gap-6 p-6">
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
   <PagingComponent onPageChange={(selectedItem: { selected: number })  => {
    console.log(`Selected page: ${selectedItem.selected + 1}`);
  }} pageCount={10}/>
   </div>
);
    };

export default ArchivePostList;
