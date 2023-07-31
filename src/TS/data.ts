import {Post, Comments} from "./interfaces"
export const dataPosts: Post[] = [
    {
    postId: 1,
    title: 'First Post',
    imageUrl: "src/IMG/imagem_geral.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",
    },

    {
    postId: 2,
    title: 'Second Post',
    imageUrl: "src/IMG/imagem_geral.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",    
    },

    {
    postId: 3,
    title: 'Third Post',
    imageUrl: "src/IMG/imagem_geral.png",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",
    },
]


export const dataComments: Comments[] = [
    {
    id: 1,
    postId: 1,
    email: 'victoria@hotmail.com',
    body: 'comment 1 lalala',
    },

    {
    id: 2,
    postId: 2,
    email: 'marcos@hotmail.com',
    body: 'comment 2 lalala',
    },

    {
    id: 3,
    postId: 2,
    email: 'luisa@hotmail.com',
    body: 'commento hsua lalala',
    },
]





