import { BlogService } from "./services/blog/blogService";
import { ContentfulBlogService } from "./services/blog/contentfulBlogService";

export function getBlogPostService(): BlogService {
  const blogService = new ContentfulBlogService();
  return blogService;
}

export function getBusService(): BlogService {
    const blogService = new ContentfulBlogService();
    return blogService;
  }

