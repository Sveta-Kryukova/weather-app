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
  error: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.selectedCity = this.cities[0];
    this.getWeatherData(this.selectedCity);
  }

  getWeatherData(city: string) {
    this.weatherService.getWeather(city)
      .subscribe(
        data => {
          this.weatherData = data;
          this.error = '';
        },
        error => {
          this.weatherData = null;
          this.error = 'Error retrieving weather data. Please try again.';
        }
      );
  }

  onCitySelect() {
    this.getWeatherData(this.selectedCity);
  }
}
