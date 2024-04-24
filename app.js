const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=1f8a48e034adb8ace243e6c6a737feb2&units=metric";
const apiKey = "1f8a48e034adb8ace243e6c6a737feb2";
async function checkWeather(){
    const response = await fetch(apiUrl + `$&appid{apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();