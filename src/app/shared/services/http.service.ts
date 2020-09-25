import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) {

  }

  getNews(){ // Returns an observable to all news specific to india
    const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=2549013a283c41859b0b3c12e0d7461a"
    return this.http.get(url);
  }
}
