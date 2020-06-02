var city = document.getElementById('searchText').value;

var image = document.createElement('img');
image.setAttribute('id', 'icon');
document.getElementById('weather-container').appendChild(image);

function weatherSearch() {
  document.getElementById('city').innerHTML = city;

  axios
    .get(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=Metric&APPID=33097b60432e0aeb705db4086da24fbb'
    )
    .then((res) => {
      console.log(res);

      var icon =
        'http://api.openweathermap.org/img/w/' +
        res.data.weather[0].icon +
        '.png';
      var temp = res.data.main.temp;
      var weather = res.data.weather[0].main;

      $('#icon').attr('src', icon);
      $('#weather').append(weather);
      $('#temp').append(temp);
    })
    .catch((err) => console.log(err));
}

