let getWeatherAPI= function (){

let getWeatherAPI ='https://api.openweathermap.org/data/2.5/weather?q=portland&appid=9b679ef1fb211d4567f1a543dd9080d9';
fetch(getWeatherAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}
getWeatherAPI()