// src/blogData.ts
export interface BlogPost {
    id: number;
    title: string;
    content: string;
  }
  
  const blogData: BlogPost[] = [
    {
      id: 1,
      title: 'Recent Blog Post 1',
      content: 'This is the content of the recent blog post 1.',
    },
    {
      id: 2,
      title: 'Recent Blog Post 2',
      content: 'This is the content of the recent blog post 2.',
    },
    {
      id: 3,
      title: 'Archived Blog Post 1',
      content: 'This is the content of an archived blog post.',
    },
    // Add more blog post data as needed
  ];
  
  export default blogData;