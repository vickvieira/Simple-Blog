"use strict";
const dataPosts = [
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
];
const dataComments = [
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
];
//Manipulando o DOM
const ul = document.getElementById("showcase");
function showdata(listDataBase) {
    const showcase = document.getElementById("showcase");
    listDataBase.forEach((item) => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        article.classList.add("post");
        img.classList.add("post-image");
        img.src = item.imageUrl;
        h2.innerText = item.title;
        p.textContent = item.body;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(article);
        if (showcase) {
            showcase.appendChild(article);
        }
    });
}
showdata(dataPosts);
