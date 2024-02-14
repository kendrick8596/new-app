const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        //TODO: add a function call to display the news
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div')

        //create and append a headline to the articleDiv as a hyperlink
        const titleLink = document.createElement('a');
        titleLink.href = article.url; //set the url
        titleLink.textContent = article.title; //set the link text
        titleLink.target = '_blank'; //open link in new tab
        articleDiv.appendChild(titleLink);

        // TODO: Use document.createElement and appendChild to create and append more elements

        newsDiv.appendChild(articleDiv);
    }
}