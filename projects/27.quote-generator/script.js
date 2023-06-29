const quoteButton = document.getElementById('quoteButton');
const url = "https://api.quotable.io/random";

const quoteBox = document.getElementById('quoteBox');

quoteButton.addEventListener("click", handleClick);


async function getapi(url) {
    const response = await fetch(url);

    let data = await response.json();
    console.log(data);
    const quote = data.content;
    // console.log(quote);
    quoteBox.textContent = quote;
    
};

function handleClick(e){
    e.preventDefault();
    getapi(url);
}

