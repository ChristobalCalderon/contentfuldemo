import { BlogService, BlogPost } from "./blogService";
import { createClient, Entry } from "contentful";
import { contentfulConfig } from "../contentfulConfig";

const client = createClient({
  space: contentfulConfig.space,
  environment: "master", // defaults to 'master' if not set
  accessToken: contentfulConfig.key
});

export class ContentfulBlogService implements BlogService {
  async getBlogPost(id: string): Promise<BlogPost> {
    const contentfulBlogPost = await client.getEntry(id);
    const blogPost: BlogPost = this.convertEntryToBlogPost(contentfulBlogPost);

    return blogPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    const allContentfulBlogPosts = (await client.getEntries({
      content_type: "nordaxBlogPost",
      order: "-fields.date,sys.createdAt,sys.id"
    })).items;

    // Convert into blog post objects
    const blogPosts = allContentfulBlogPosts.map(item => {
      const blogPost: BlogPost = this.convertEntryToBlogPost(item);

      return blogPost;
    });

    return blogPosts;
  }

  private convertEntryToBlogPost(item: Entry<{}>): BlogPost {
    const fields: any = item.fields;

    return {
      id: item.sys.id,
      imageUrl: fields.image.fields.file.url,
      content: fields.body,
      date: fields.date,
      title: fields.title
    };
  }
}
