import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('https://api.myjson.com/bins/mg70w')
  }
}