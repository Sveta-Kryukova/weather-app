import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  cities = [
    "Біла Церква",
    "Бердянськ",
    "Бровари",
    "Вінниця",
    "Дніпро",
    "Донецьк",
    "Житомир",
    "Запоріжжя",
    "Івано-Франківськ",
    "Каменское",
    "Керч",
    "Київ",
    "Краматорськ",
    "Кривий Ріг",
    "Кропивницький",
    "Луганськ",
    "Луцьк",
    "Львів",
    "Макіївка",
    "Маріуполь",
    "Мелітополь",
    "Миколаїв",
    "Нікополь",
    "Одеса",
    "Павлоград",
    "Полтава",
    "Рівне",
    "Севастополь",
    "Симферополь",
    "Славянск",
    "Суми",
    "Тернопіль",
    "Ужгород",
    "Харків",
    "Херсон",
    "Хмельницький",
    "Черкаси",
    "Чернігів",
    "Чернівці"
  ];
  selectedCity = '';
  weatherData: any;
  selectedUnit = 'celsius';
  error = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.selectedCity = this.cities[0];
    this.getWeatherData(this.selectedCity);
  }

  getWeatherData(city: string) {
    const cachedWeatherData = sessionStorage.getItem(city);

    if (cachedWeatherData) {
      this.weatherData = JSON.parse(cachedWeatherData);
      this.convertTemperature();
      this.error = '';
    } else {

      this.weatherService.getWeather(city)
        .subscribe(
          data => {
            this.weatherData = data;
            this.convertTemperature();
            this.error = '';

            sessionStorage.setItem(city, JSON.stringify(data));
          },
          error => {
            this.weatherData = null;
            this.error = 'Error retrieving weather data. Please try again.';
          }
        );
    }
  }

  onCitySelect() {
    this.getWeatherData(this.selectedCity);
  }

  onUnitSelect() {
    this.convertTemperature();
  }

  convertTemperature() {
    if (this.weatherData) {
      const temperature = this.weatherData.main.temp;

      this.weatherData.main.temp_celsius = Math.round(temperature - 273.15);

      this.weatherData.main.temp_fahrenheit = Math.round(
        this.weatherData.main.temp_celsius * (9 / 5) + 32
      );
    }
  }

  translateWeatherCondition(description: string): string {
    switch (description) {
      case 'clear sky':
        return 'Ясно';
      case 'few clouds':
        return 'Небагато хмар';
      case 'overcast clouds':
        return 'Хмарно';
      case 'scattered clouds':
        return 'Розсіяні хмари';
      case 'broken clouds':
        return 'Купчасті хмари';
      case 'shower rain':
        return 'Проливний дощ';
      case 'rain':
        return 'Дощ';
      case 'light rain':
        return 'Невеликий дощ';
      case 'thunderstorm':
        return 'Гроза';
      case 'snow':
        return 'Сніг';
      case 'mist':
        return 'Туман';
      case 'smoke':
        return 'Дим';
      case 'haze':
        return 'Димка';
      case 'dust':
        return 'Пил';
      case 'fog':
        return 'Туман';
      case 'sand':
        return 'пісок';
      case 'ash':
        return 'Попіл';
      case 'squall':
        return 'Шквал';
      case 'tornado':
        return 'Торнадо';
      default:
        return '';
    }
  }
}
