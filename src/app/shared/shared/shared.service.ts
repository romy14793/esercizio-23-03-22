import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Activity } from 'src/app/Models/Activity';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  subject = new Subject<Activity>();

  constructor(private http: HttpClient) {}

  getActivity() {
    return this.http.get<Activity>('https://www.boredapi.com/api/activity');
  }
}
