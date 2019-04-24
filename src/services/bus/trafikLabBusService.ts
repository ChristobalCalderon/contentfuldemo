import { BusService, BusPost } from "./busService";
import { createClient, Entry } from "contentful";
import { contentfulConfig } from "../contentfulConfig";

const client = createClient({
  space: contentfulConfig.space,
  environment: "master", // defaults to 'master' if not set
  accessToken: contentfulConfig.key
});

export class TafikLabBusService implements BusService {
  async getBusPost(id: string): Promise<BusPost> {
      const client2 = new 
    const allTafikLabBusPosts = await client.getEntry(id);
    const busPost: BusPost = this.convertEntryToBlogPost(allTafikLabBusPosts);

    return busPost;
  }

  async getBusPosts(): Promise<BusPost[]> {
    const allTafikLabBusPosts = (await client.getEntries({
      content_type: "nordaxBlogPost",
      order: "-fields.date,sys.createdAt,sys.id"
    })).items;

    // Convert into blog post objects
    const blogPosts = allTafikLabBusPosts.map(item => {
      const busPost: BusPost = this.convertEntryToBlogPost(item);

      return busPost;
    });

    return blogPosts;
  }

  private convertEntryToBlogPost(item: Entry<{}>): BusPost {
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
