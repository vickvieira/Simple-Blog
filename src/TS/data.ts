import {Post, Comments} from "./interfaces"

export const dataPosts: Post[] = [
    {
        postId: 1,
        title: 'First Post',
        imageUrl: "src/IMG/imagem_geral.png",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.the printing and typesetting industry... ",
    },

    {
        postId: 2,
        title: 'Second Post',
        imageUrl: "src/IMG/imagem_geral.png",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took`,    
    },

    {
        postId: 3,
        title: 'Third Post',
        imageUrl: "src/IMG/imagem_geral.png",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",
    },

    {
        postId: 4,
        title: 'Fourth Post',
        imageUrl: "src/IMG/imagem_geral.png",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",
    },

    {
        postId: 5,
        title: 'Fifth Post',
        imageUrl: "src/IMG/imagem_geral.png",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",
    },

    {
        postId: 6,
        title: 'Sixth Post',
        imageUrl: "src/IMG/imagem_geral.png",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...",
    },
]


export const dataComments: Comments[] = [
    {
        id: 1,
        postId: 1,
        email: 'victoria@hotmail.com',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu felis id eros faucibus malesuada. Vestibulum nec mauris sit1 lalala',
    },

    {
        id: 2,
        postId: 1,
        email: 'victoria@hotmail.com.br',
        body: 'commehsuahsauhsauhsauha',
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

    {
        id: 4,
        postId: 2,
        email: 'john.doe@example.com',
        body: 'comment 2 Lorem ipsum dolor sit amet.',
    },

    {
        id: 5,
        postId: 3,
        email: 'alex.smith@gmail.com',
        body: 'comment 3 This is a test comment.',
    },

    {
        id: 6,
        postId: 4,
        email: 'mary.jane@yahoo.com',
        body: 'comment 4 Hello from another comment!',
    },

    {
        id: 7,
        postId: 4,
        email: 'peter.pan@example.net',
        body: 'comment 5 Another comment here!',
    },

    {
        id: 8,
        postId: 4,
        email: 'emma.smith@example.org',
        body: 'comment 6 Final comment for now.',
    }
    {
        id: 9,
        postId: 5,
        email: 'user1@example.com',
        body: 'This is a random comment for Random Post 1. It provides more details and insights about the content of the post. The comment is quite long and elaborates on var.',
    },
    {
        id: 10,
        postId: 6,
        email: 'user2@example.com',
        body: 'This is another random comment for Random Post 1. It continues the discussion from the previous comment and adds new perspectives to the topic. The comment is substantial and aims .',
    }

]





