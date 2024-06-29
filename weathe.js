
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const input = document.querySelector('.input');
    const locationElement = document.querySelector('.location');
    const temperatureElement = document.querySelector('.degreee');
    const weatherElement = document.querySelector('.weather');
    const humidityElement = document.querySelector('.humidity');
    const windElement = document.querySelector('.wind');

    const apiKey = '9ae29f6c369beb64204d2f37af3f75a5'; 

    searchButton.addEventListener('click', () => {
        const searchTerm = input.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                locationElement.textContent = data.name;
                temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
                weatherElement.textContent = data.weather[0].main;
                humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
                windElement.textContent = `Wind: ${data.wind.deg}°`; 
            })
    });
});
