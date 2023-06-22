import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
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
  selectedCity: string = '';
  weatherData: any;
  selectedUnit: string = 'celsius';
  error: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.selectedCity = this.cities[0];
    this.getWeatherData(this.selectedCity);
  }

  getWeatherData(city: string) {
    const cachedWeatherData = window.sessionStorage.getItem(city);
  
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
            window.sessionStorage.setItem(city, JSON.stringify(data));
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

      if (this.selectedUnit === 'celsius') {
        this.weatherData.main.temp_celsius = Math.round(temperature - 273.15);
        this.weatherData.main.temp_fahrenheit = Math.round(
          this.weatherData.main.temp_celsius * (9 / 5) + 32
        );
      } else {
        this.weatherData.main.temp_fahrenheit = Math.round(temperature * (9 / 5) - 459.67);
        this.weatherData.main.temp_celsius = Math.round(
          (this.weatherData.main.temp_fahrenheit - 32) * (5 / 9)
        );
      }
    }
  }
}
