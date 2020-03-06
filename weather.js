class  Weather{
    constructor(city,country){
        this.apiKey = "f2f69b65dfed8862b7bee4125f49d0d3";
        this.city = city;
        this.country = country;
    }
    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}l&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    } 

    //Change weather location
    changeLocation(city,country){
        this.city = city;
        this.country = country;
    }
}