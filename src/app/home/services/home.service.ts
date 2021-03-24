import { INavigation } from './../../common/models/navigation.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getNavigation(): Observable<INavigation[]> {
    return this.http.get<any>(this.url + 'navigation.json');
  }

  getHello(): Observable<any> {
    return this.http.get<any>(this.url + 'hello.json');
  }

  getResume(): Observable<any> {
    return this.http.get<any>(this.url + 'resume.json');
  }
}
