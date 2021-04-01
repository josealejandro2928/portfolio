import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = environment.apiUrl;
  constructor() {}

  async getSource(segmentUrl) {
    let data = require(`src/assets/db/${segmentUrl}`);
    return data;
  }
}
