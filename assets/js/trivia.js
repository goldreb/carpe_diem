///https://opentdb.com/api.php?amount=10
let triviaAPI= function (){

    let triviaAPI ='https://uselessfacts.jsph.pl/random.json?language=en';
    fetch(triviaAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

     document.getElementById('trivia').textContent = data.text;

      })
    }
    triviaAPI()