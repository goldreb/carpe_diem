let getQuote = function() {
    let quoteAPI = `https://quote-garden.herokuapp.com/api/v3/quotes`;

    fetch(quoteAPI)
        .then(function (response) {
            return response.json()}).then(function (data) {
                console.log(data)
                let index = Math.floor(Math.random() * data.data.length);
                document.getElementById("quote").textContent = data.data[index].quoteText;
                document.getElementById("author").textContent = data.data[index].quoteAuthor

            });
}
getQuote()