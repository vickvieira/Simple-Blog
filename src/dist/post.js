import { dataPosts, dataComments } from './data.js';
//Ideia de como poderia linkar os posts com os comments a partir das seguintes funções:
//function findPostById(postId: number): Post | undefined {
/// return dataPosts.find((item) => item.postId === postId);
//}
//Retorna o objeto Post correspondente ao postId fornecido da matriz dataPosts.
//function filterCommentsByPostId(postId: number) {
//c//onst filteredComment = dataComments.filter((comment) => comment.postId == postId);
// return 
//}
//Retorna uma matriz de objetos Comments filtrada com base no postId fornecido da matriz dataComments.
//function createCommentElement(comment: Comments): HTMLElement
//Cria um elemento de comentário (por exemplo, <li>) com base nos dados do comentário fornecidos.
//Retorna o elemento criado.
//function showPostDetails(postId: number): void
//Exibe os detalhes completos do post e seus comentários com base no postId fornecido.
//Usa funções auxiliares como findPostById, filterCommentsByPostId, createCommentElement para preencher os elementos HTML relevantes no DOM.
//exemplo de um código fazendo tudo em apenas uma função:
function showPostAndComments(postId) {
    const post = dataPosts.find((item) => item.postId === postId);
    const comments = dataComments.filter((comment) => comment.postId === postId);
    if (!comments) {
        return;
    }
    console.log(comments);
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
        ul.appendChild(section);
        console.log(ul);
    });
}
// Extract the postId from the URL and call showPostAndComments function
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id") || "0");
console.log(postId);
showPostAndComments(postId);
//# sourceMappingURL=post.js.map