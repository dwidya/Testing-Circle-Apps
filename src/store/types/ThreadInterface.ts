import { IUsers } from "./UserInterface";

export interface IThreads {
    id?: number;
    content?:string;
    createdAt?:string;
    image?:string;
    number_of_replies?: number;
    number_of_likes: number
    user?: IUsers;
  }
  
  
  
  export interface IThreadsPost {
    content?: string,
    image?: FileList | null
  }