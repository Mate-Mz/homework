function newPost(title, contenct){
    const mainElement = document.querySelector("main");
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.innerText = title
    const p = document.createElement("p");
    p.innerText = contenct

    article.append(h2, p);
    mainElement.append(article);
}

async function fetchData() {
    try {
        const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await rawData.json();
        
        data.forEach((d) => {
            const post = newPost(d.title, d.body);
            document.body.append(post);
        });
    } catch (error) {
        console.log(error);
    }
}
fetchData();