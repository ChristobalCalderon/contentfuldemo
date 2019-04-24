export interface BusService {
    getBusPosts(): Promise<BusPost[]>;
    getBusPost(id: string): Promise<BusPost>;
  }
  
  export interface BusPost {
    id: string;
    imageUrl: string;
    date: string;
    title: string;
    content: string;
  }
  