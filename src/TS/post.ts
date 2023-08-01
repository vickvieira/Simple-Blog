import { dataPosts, dataComments } from './data.js';
import { Post, Comments } from './interfaces.js';

//Ideia de como poderia linkar os posts com os comments a partir das seguintes funções:


function showPostAndComments(postId: number): void {
    const post = dataPosts.find((item) => item.postId === postId);
    const comments = dataComments.filter((comment) => comment.postId === postId);

    if (post) {
            const showcase = document.getElementById("showcase")
    
            const article = document.createElement("article");
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const div = document.querySelector(".expanded-post")

            article.classList.add("post-details")
            img.classList.add("post-details-image")

            img.src = post.imageUrl;
            h2.innerText = post.title;
            p.textContent = post.body;
            
            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p);

            div?.appendChild(article);
            if(showcase){
            showcase.appendChild(article)
            }
        };       

    if (!comments) {
        return;
    }
    console.log(comments);//verificar se os arrays estão sendo passados corretamente

    comments.forEach(item => {
        const section = document.createElement("section");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const ul = document.querySelector(".comments");

        section.classList.add("comments-details");

        h3.innerText = item.id.toString() + ": " + item.email + ": ";
        p.innerText = item.body;

        section.appendChild(h3);
        section.appendChild(p);
        console.log(section);
        ul!.appendChild(section);

        console.log(ul);//verificar situação da ul criada

    });
}


const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id") || "0");
console.log(postId);//verificar o postId recebido
showPostAndComments(postId);



