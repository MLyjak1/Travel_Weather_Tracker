const APIKey = "fa63de41c70846d5147be19a156b6904";

let textBoxEl = $("<textarea>").text("");
let submitEl = $("<button>").text("Search");
let cityValue = "";
let data = {};

$(".container").append(textBoxEl).append(submitEl);


function findCity(cityValue) {

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityValue + '&units=imperial&limit=5&appid=' + APIKey,
    method: 'GET',
  }).then(function (response) {
    console.log('Ajax Reponse \n-------------');
    data = response
    console.log(data);
    console.log(data.city.name);
     //0 will be i
    console.log(data.list[0].main.temp); 
    console.log(data.list[0].weather[0].description); 
    console.log(data.list[0].weather[0].icon);  
    console.log(data.list[0].wind.speed); 
    console.log(data.list[0].main.humidity); 
  });
};

// function createCard(data){
//   for(var i = 0; i<5; i++){
//     console.log(data.weather);
//   }
// }

  //   fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + 'London' + '&limit=5&appid=' + APIKey)
  //   .then(function (response) {
  //       // console.log(response.json());
  //      return response.json();
  //      console.log(data);
  //     })
  //     .then(function () {
  //       console.log()
  //     });
  // };


  $(submitEl).on("click", function () {
    cityValue = textBoxEl.val();
    findCity(cityValue);
  });























// let allCityInfo = city.list.json;

// let autoCity = [];
// fetch('./city.list.json')
//   .then(function (response) {
//     return response.json();
//   })
// console.log(JSON.parse('/db/city.list.json'));

// $(function () {
//    $('autoCity').autocomplete({
//       source: ,
//     });
//   });