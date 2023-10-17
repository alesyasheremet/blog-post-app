import React, { useState } from 'react';

interface BlogPostProps {
  onAddPost: (post: BlogPostData) => void;
}

interface BlogPostData {
  name: string;
  category: string;
  image: string;
  message: string;
}

const CreateBlogPost: React.FC<BlogPostProps> = ({ onAddPost }) => {
  const [postData, setPostData] = useState<BlogPostData>({
    name: '',
    category: '',
    image: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleAddPost = () => {
    onAddPost(postData);
    setPostData({
      name: '',
      category: '',
      image: '',
      message: '',
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Blog Post Name"
        value={postData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={postData.category}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={postData.image}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={postData.message}
        onChange={handleInputChange}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default CreateBlogPost;