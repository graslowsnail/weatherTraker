
//gets weather for city
var getWeather = function (cityName) {
    //format the api url
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=c19cfd4dbd3488a5a7710c92f15fd235&units=imperial";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data.city.name);
                    console.log(data.list[0].main.temp + "°F");
                    var currentWeather = data.list[0].main.temp + "°F";


                    displayWeather(currentWeather, cityName);
                });
            } else {
                alert("error: bad request");
            }
        });

};

var displayWeather = function (cityInfo, searchTerm) {
    var weatherLi = $("<li>")
        .addClass("");
    var cityName = $("h2")
        .addClass("text-uppercase text-center")
        .text(searchTerm);
    var weatherP = $("<p>")
        .addClass("m-1")
        .text(cityInfo);
    weatherLi.append(cityName, weatherP);

    $("#cityInformation").append(weatherLi);

};


// Get value on button click and show alert
$("#search").click(function () {
    var str = $("#cityName").val();

    getWeather(str);
});





//event listener for when search button is clicked
//prints and apends element to body
// $("button").on("click", function () {
//     $("<div>This is a click Event</div>").appendTo("body");
//     console.log("when i click the button");
//     // getWeather();

//     getWeather("houston");
// });