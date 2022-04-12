document.querySelector('#press').addEventListener('click', getWeather)

function getWeather(){
  const lat = document.querySelector('#lat').value
  const long = document.querySelector('#long').value
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.temp').innerText=data.hourly.temperature_2m[0] + data.hourly_units.temperature_2m
        document.querySelector('.precip').innerText=data.hourly.precipitation[0] + data.hourly_units.precipitation
        document.querySelector('.humidity').innerText=data.hourly.relativehumidity_2m[0] + data.hourly_units.relativehumidity_2m
        document.querySelector('.windspeed').innerText=data.hourly.windspeed_10m[0] + data.hourly_units.windspeed_10m
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// https://open-meteo.com/en