import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../interfeces/status';
import { Priority } from '../interfeces/priority';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  getStatuses(){
    return this.http.get<Status[]>('http://127.0.0.1:3000/statuses');
  }
  getPriorities(){
    return this.http.get<Priority[]>('http://127.0.0.1:3000/priorities');
  }
}
