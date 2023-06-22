import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '17dc71bb4ac06ea33cab56e5935c72a3';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
