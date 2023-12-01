import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  apiUrl = 'https://api.gameofthronesquotes.xyz/v1/';
  constructor(
    private   http: HttpClient
  ) {}

  getQuotes(count: number = 5) {
    return this.http.get(`${this.apiUrl}random/${count}`);
  }
  getHouses() {
    return this.http.get(`${this.apiUrl}houses`);
  }
  getPeople() {
    return this.http.get(`${this.apiUrl}characters`);
  }
}
