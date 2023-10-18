// BlogPostService.ts

import axios, { CancelTokenSource } from "axios";
import { ICategory, IResponse } from "../types/BlogPost";



export class BlogPostService {
  private cancelTokenSource: CancelTokenSource;

  constructor() {
    this.cancelTokenSource = axios.CancelToken.source();
  }

  public async fetchPosts(page: number, perPage: number): Promise<IResponse> {
    console.log(process.env.NODE_ENV)     
    const token = "pj11daaQRz7zUIH56B9Z";
    var headers = {
      key: token,
    };
    try {
      const response = await axios.get<IResponse>(
        `${process.env.API_URL}/api/posts?page=${page}&perPage=${perPage}&sortBy=created_at&sortDirection=desc`,
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
    console.log(process.env.NODE_ENV)     
    const token = "pj11daaQRz7zUIH56B9Z";
    var headers = {
      key: token,
    };
    try {
      const response = await axios.get<ICategory[]>(
        `${process.env.API_URL}/api/categories`,
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
