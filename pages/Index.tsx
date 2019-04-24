import * as React from "react";
import { BlogPost } from "../src/services/blog/blogService";
import { getBlogPostService } from "../src/getServices";
import { BlogPostDisplay } from "../src/components/BlogPost"

interface IndexProps {
  blogPosts: BlogPost[];
}

export default function Index(props: IndexProps) {
  const blogPosts = props.blogPosts;

  debugger;
  return (
    <div>
     {blogPosts.map((blogPost, index) => (
       <BlogPostDisplay fullScreen={false} blogPost={blogPost} firstPost={index === 0 ? true : false} />
      ))}
      </div>
  );
}

Index.getInitialProps = async function(): Promise<IndexProps> {
  const blogService = getBlogPostService();
  const blogPosts = await blogService.getBlogPosts();

  return { blogPosts: blogPosts };
};