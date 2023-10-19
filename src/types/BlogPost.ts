interface SubmitBlogPostProps {
  formData: BlogPostFormData;
}

interface BlogPostFormData {
  title: string;
  content: string;
  category_id: string;
  image: Blob | null;
}

export interface RecentBlogPost {
  post: IBlogPost;
}

export interface ICategory {
  id: number;
  name: string;
  created_at: any;
  updated_at: any;
}

export interface IResponse {
  current_page: number;
  data: IBlogPost[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: any;
  to: number;
  total: number;
}

export interface IBlogPost {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  category_id: number;
  img_url: string;
  category: ICategory;
}

export interface ICategory {
  id: number;
  name: string;
  created_at: any;
  updated_at: any;
}

export interface ILink {
  url?: string;
  label: string;
  active: boolean;
}
