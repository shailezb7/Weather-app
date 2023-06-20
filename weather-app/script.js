const apiKey = 'cdd32d7a15c327e67c5c3cebda58f6a0';


 const place = document.getElementById('location');

 const taapmaan = document.getElementById('temperature');

 const desc = document.getElementById('description');


function getData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const location = data.name;

      const temperature = data.main.temp;
      
      const description = data.weather[0].description;


      place.textContent = `Location: ${location}`;

      taapmaan.textContent = `Temperature: ${temperature}°C`;

      desc.textContent = `Description: ${description}`;
    })
    .catch(error => {
      console.log('Error :', error);
    });
}


 const city = prompt('Enter a city name:');
 if (city) {
   getData(city);
 }