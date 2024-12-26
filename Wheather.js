// Array to hold city weather objects
const cityWeatherData = [];

// Function to add city weather
function addCityWeather(cityName, temperature, condition) {
    const weatherObject = {
        cityName,
        temperature,
        condition
    };
    cityWeatherData.push(weatherObject);
}

// Function to find the hottest city
function findHottestCity() {
    return cityWeatherData.find(city => city.temperature === Math.max(...cityWeatherData.map(c => c.temperature)));
}

// Function to filter cities by weather condition
function filterByCondition(condition) {
    return cityWeatherData.filter(city => city.condition.toLowerCase() === condition.toLowerCase());
}

// Function to log weather summary
function logWeatherSummary() {
    return cityWeatherData.map(({ cityName, temperature, condition }) => 
        `The weather in ${cityName} is currently ${condition} with a temperature of ${temperature}°C.`
    ).join('\n');
}

// Event listener for form submission
document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cityName = document.getElementById('cityName').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    const condition = document.getElementById('condition').value;

    addCityWeather(cityName, temperature, condition);
    event.target.reset(); // Reset form inputs
});

// Event listener for showing summary
document.getElementById('showSummary').addEventListener('click', function() {
    const summary = logWeatherSummary();
    document.getElementById('results').textContent = summary || 'No weather data available.';
});

// Event listener for finding the hottest city
document.getElementById('findHottest').addEventListener('click', function() {
    const hottestCity = findHottestCity();
    const results = hottestCity ? `Hottest City: ${hottestCity.cityName}, Temperature: ${hottestCity.temperature}°C, Condition: ${hottestCity.condition}` : 'No weather data available.';
    document.getElementById('results').textContent = results;
});

// Event listener for filtering by condition
document.getElementById('filterButton').addEventListener('click', function() {
    const condition = document.getElementById('filterCondition').value;
    const filteredCities = filterByCondition(condition);
    
    const results = filteredCities.length > 0 
        ? filteredCities.map(city => `${city.cityName}: ${city.temperature}°C, Condition: ${city.condition}`).join('\n')
        : `No cities found with condition: ${condition}`;
    
    document.getElementById('results').textContent = results;
});