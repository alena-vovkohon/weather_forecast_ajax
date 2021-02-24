let boxWeather = document.querySelector('.box-weather');
// console.log(boxWeather);
let boxInfo = document.querySelector('.box-info');
// console.log(boxInfo);

fetch('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    // temp
    let temp = json.main.temp;
    console.log(temp);
    let div = document.createElement('div');
    div.classList.add('box-temp');
    let h2 = document.createElement('h2');
    h2.classList.add('temp');
    h2.innerHTML = temp;
    div.appendChild(h2);
    boxWeather.appendChild(div);

    // Feeling Like
    let feelingLike = json.main.feels_like;
    console.log(feelingLike);
    let p = document.createElement('p');
    p.classList.add('feeling-like');
    p.innerHTML = 'Feeling Like: ' + feelingLike;
    div.appendChild(p);
    boxWeather.appendChild(div);

    //description
    let description = json.weather[0].description;
    console.log(description);
    let h3 = document.createElement('h3');
    h3.classList.add('description');
    h3.innerHTML = description;
    div.appendChild(h3);
    boxWeather.appendChild(div);

    //icon        
    let icon = json.weather[0].icon;
    console.log(icon);
    let wrap = document.querySelector('.box-weather');
    let iconImg = document.querySelector('.wrap img');
    let div3 = document.createElement('div');
    div3.classList.add('box-icon');
    wrap.appendChild(div3);
    div3.appendChild(iconImg);
    let newIconImg = iconImg.getAttribute('src').replace('', `http://openweathermap.org/img/w/` + `${icon}` + `.png`);
    iconImg.setAttribute('src', newIconImg);
    console.log(iconImg);

    //wind
    let windDeg = json.wind.deg;
    let windSpeed = json.wind.speed;
    console.log(windSpeed);
    let div1 = document.createElement('div');
    div1.classList.add('box-information');
    let p4 = document.createElement('p');
    p4.classList.add('wind');
    p4.innerHTML = 'Wind: ' + windSpeed + ' km/h ' + windDeg;
    div1.appendChild(p4);
    boxInfo.appendChild(div1);

    //Humidity
    let humidity = json.main.humidity;
    console.log(humidity);
    let p2 = document.createElement('p');
    p2.classList.add('humidity');
    p2.innerHTML = 'Humidity: ' + humidity + ' % ';
    div1.appendChild(p2);
    boxInfo.appendChild(div1);

    //Pressure
    let pressure = json.main.pressure;
    console.log(pressure);
    let p3 = document.createElement('p');
    p3.classList.add('humidity');
    p3.innerHTML = 'Pressure: ' + pressure + ' hPa ';
    div1.appendChild(p3);
    boxInfo.appendChild(div1);
  })

//day
let d = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let h2 = document.createElement('h2');
let div1 = document.createElement('div');
div1.classList.add('box-day');
h2.classList.add('day');
h2.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " - " + days[d.getDay()];
div1.appendChild(h2);
boxInfo.appendChild(div1);

let p2 = document.createElement('p');
let div2 = document.createElement('div');
div2.classList.add('box-day');
p2.classList.add('day');
p2.innerHTML = months[d.getMonth()] + " " + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
div2.appendChild(p2);
boxWeather.appendChild(div2);

let updateDiv = document.querySelector('.update');
let img = document.createElement('img');
img.classList.add('img-update');
updateDiv.appendChild(img);
div2.appendChild(updateDiv);
img.setAttribute('src', 'img/iconfinder2.png');
let update = updateDiv.firstChild;
// console.log(update);
update.addEventListener('click', function () {
  location.reload();
})

// time  
window.onload = function () {
  window.setInterval(
    function () {
      var d = new Date();
      document.getElementById("clock").innerHTML = d.toLocaleTimeString();
    }
    , 1000);
}





