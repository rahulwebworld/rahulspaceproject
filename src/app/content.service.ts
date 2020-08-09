
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class PictureService {
  url: any = 'https://api.spacexdata.com/v3/launches?limit=100';

  constructor(public http: HttpClient) { }

  getAll(): Observable<any> {
     return this.http.get(this.url);
  }
  getSuccesLaunch(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true');

  }

  getYearLaunch(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014');

  }

  getSuccesLand(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true');
  }
}