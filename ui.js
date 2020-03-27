class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feels-like");
    this.visibility = document.getElementById("w-visibility");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    this.location.textContent = `${weather.name},${weather.sys.country} `;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.ceil((weather.main.temp - 273) * 10) /
      10} C (${Math.ceil(((weather.main.temp - 273.15) * 1.8 + 32) * 10) /
      10} F)`;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.feelslike.textContent = `Feels like: ${Math.ceil(
      (weather.main.feels_like - 273) * 10
    ) / 10} C (${Math.ceil(
      ((weather.main.feels_like - 273.15) * 1.8 + 32) * 10
    ) / 10} F)`;
    if(isNaN(weather.visibility)){
      this.visibility.textContent=`Visibility: Not Available`
    }else{
      this.visibility.textContent = `Visibility: ${Math.ceil(
        (weather.visibility / 1000) * 10
      ) / 10}km`;
    }
    this.wind.textContent = `Wind: ${weather.wind.deg} degrees, Speed: ${weather.wind.speed} kph`;
  }
}
