
$.get('https://news.wwworkshop.org/everything?domains=medium.com,dribbble.com,usepanda.com', function (data){
console.log(data.articles)
data.articles.forEach((article) => {
    $('.articles-feed').append(`

    <article class="article">
        <div class="article-image">
            <img src="${article.urlToImage}" alt="">
        </div>
        <header>
            <h1 class="article-title">${article.title}</h1>
            
            <h3 class="article-source">${article.source.name}</h3>
        </header>
        <div class="content">
            <p>${article.content}</p>
        </div>
        <a href="${article.url}" target="_blank" class="article-link">Read more</a>
    </article>
    `)

    //<h2 class="article-author">${article.author} ${article.description}</h2> //
})
})

