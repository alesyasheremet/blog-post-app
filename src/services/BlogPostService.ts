// BlogPostService.ts

import axios, { CancelTokenSource } from "axios";

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

export class BlogPostService {
  private cancelTokenSource: CancelTokenSource;

  constructor() {
    this.cancelTokenSource = axios.CancelToken.source();
  }

  public async fetchPosts(page: number, perPage: number): Promise<IResponse> {
    const token = "pj11daaQRz7zUIH56B9Z";
    var headers = {
      key: token,
    };
    try {
      const response = await axios.get<IResponse>(
        `https://frontend-case-api.sbdev.nl/api/posts?page=${page}&perPage=${perPage}&sortBy=created_at&sortDirection=desc`,
        {
          cancelToken: this.cancelTokenSource.token,
          headers: { token: token },
          timeout: 10000,
        },
      );
      return response.data;
    } catch (ex) {
      if (axios.isCancel(ex)) {
        throw new Error("Request Cancelled");
      }

      throw new Error("An unexpected error has occurred");
    }
  }

  public async fetchCategories(): Promise<ICategory[]> {
    const token = "pj11daaQRz7zUIH56B9Z";
    var headers = {
      key: token,
    };
    try {
      const response = await axios.get<ICategory[]>(
        `https://frontend-case-api.sbdev.nl/api/categories`,
        {
          cancelToken: this.cancelTokenSource.token,
          headers: { token: token },
          timeout: 10000,
        },
      );
      return response.data;
    } catch (ex) {
      if (axios.isCancel(ex)) {
        throw new Error("Request Cancelled");
      }

      throw new Error("An unexpected error has occurred");
    }
  }

  public cancelRequest() {
    this.cancelTokenSource.cancel("User cancelled operation");
  }
}
