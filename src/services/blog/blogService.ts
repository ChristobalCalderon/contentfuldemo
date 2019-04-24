export interface BlogService {
    getBlogPosts(): Promise<BlogPost[]>;
    getBlogPost(id: string): Promise<BlogPost>;
  }
  
  export interface BlogPost {
    id: string;
    imageUrl: string;
    date: string;
    title: string;
    content: string;
  }
  