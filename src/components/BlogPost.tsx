import React from "react";
import { BlogPost } from "../services/blog/blogService";
import ReactMarkdown from "react-markdown";
import moment from "moment";

interface BlogPostProps {
  blogPost: BlogPost;
  firstPost?: boolean;
  fullScreen: boolean;
}

export function BlogPostDisplay(props: BlogPostProps) {
  const text = props.blogPost.content
  const date = moment(props.blogPost.date).format("D MMMM YYYY");

  return (
    <div>
      <style>{"p { color: rgb(0,0,0); font-size: 1.6rem }"}</style>
      <div
        style={{
          marginBottom: 20
        }}
      >
      <img src={props.blogPost.imageUrl} />
      </div>
       <h2 style={{ marginBottom: 20 }}>{props.blogPost.title}</h2>
      <div style={{ fontWeight: "bold", marginBottom: 20 }}>{date}</div>
      <ReactMarkdown source={text} />
    </div>
  );
}
