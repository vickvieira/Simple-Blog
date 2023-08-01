import { dataPosts } from './data.js';
//Manipulando o DOM
const ul = document.getElementById("showcase");
function showPost(listDataBase) {
    const showcase = document.getElementById("showcase");
    listDataBase.forEach((item) => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const expand = document.createElement("a");
        article.classList.add("post");
        img.classList.add("post-image");
        img.src = item.imageUrl;
        h2.innerText = item.title;
        if (item.body.length > 185)
            p.innerText = item.body.substring(0, 183) + "...";
        else
            p.innerText = item.body;
        //p.textContent = item.body;
        expand.textContent = "Expand...";
        expand.href = `post.html?id=${item.postId}`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(expand);
        //
        //article.addEventListener("click", function()// {
        // ({...item, id: dataPosts.length + 1})}
        ul === null || ul === void 0 ? void 0 : ul.appendChild(article);
        if (showcase) {
            showcase.appendChild(article);
        }
    });
}
showPost(dataPosts);
//# sourceMappingURL=app.js.map