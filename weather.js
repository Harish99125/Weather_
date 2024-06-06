async function fetchWeatherData(city) {
    try {
        const mockResponse = {
            name: city,
            main: {
                temp: Math.floor(Math.random() * 40),
            },
        };

        updateWeatherUI(mockResponse);
    } catch (error) {
        console.error(error);
    }
}

const cityElement = document.querySelector(".city");
const temperature = document.querySelector(".temp");

function updateWeatherUI(data) {
    cityElement.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
}

const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const city = inputElement.value.trim();
    if (city !== "") {
        fetchWeatherData(city);
        inputElement.value = "";
    }
});

