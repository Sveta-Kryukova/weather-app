# WeatherApp

WeatherApp is a simple Angular application that displays weather information for a given location.

Click to try 👉 [DEMO](https://sveta-kryukova.github.io/weather-app/)

## Functionality

✔️Display Weather Data: The application fetches weather data from the OpenWeatherMap API and displays the current weather conditions, including temperature, description.

✔️City Selection: Users can select a city from a predefined list of cities. The weather data for the selected city is then fetched and displayed.

✔️Temperature Conversion: Temperature is displayed in both Celsius and Fahrenheit. Users can switch between the two units.

✔️Caching: Weather data for each city is cached in the browser's sessionStorage to improve performance. Cached data is used if available, reducing the number of API calls.

✔️Error Handling: If an error occurs while retrieving weather data, an error message is displayed to the user.

## Technologies Used

⚫ Angular: A popular JavaScript framework for building web applications.

⚫ OpenWeatherMap API: An API service used to retrieve weather data.

⚫ HTML: Markup language for structuring the web pages.

⚫ TypeScript: A statically-typed superset of JavaScript used in Angular development.

⚫ SCSS: CSS preprocessor for adding enhanced features to CSS.

⚫ RxJS: Reactive programming library used for handling asynchronous operations.

⚫ Git: Version control system for tracking changes in the codebase.

⚫ GitHub: Hosting platform for managing and sharing Git repositories.


## Getting Started

To get started with WeatherApp, follow these steps:

1. Clone the repository:
  
    ```git clone https://github.com/your-username/weather-app.git```
  
2. Install the dependencies:
   
   ```npm install```
   
3. Obtain an API key from OpenWeatherMap API [OpenWeatherMap](https://openweathermap.org/) and replace `<API_KEY>` in `src/app/services/weather.service.ts` with your actual API key.
   
4. Build and run the application:

   ```ng serve```
   
5. Open the application in your browser at [localhost](http://localhost:4200)

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.
