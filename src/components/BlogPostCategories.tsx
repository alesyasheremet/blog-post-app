import React, { useEffect, useState } from "react";
import {
  BlogPostService,
} from "../services/BlogPostService";
import { ICategory } from "../types/BlogPost";

const defaultCategories: ICategory[] = [];

const BlogPostCategories: React.FC = () => {
  const [categories, setCategories] = useState(defaultCategories);
  const postService = new BlogPostService();
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

  return (
<>
<option value="">Geen categorie</option>
{categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
    </>
  );
};

export default BlogPostCategories;
