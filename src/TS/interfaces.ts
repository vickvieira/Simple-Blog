export interface Post {
    postId: number;
    title: string;
    imageUrl: string;
    body: string;
}

export interface Comments {
    id: number
    postId: number
    email: string
    body: string
   }