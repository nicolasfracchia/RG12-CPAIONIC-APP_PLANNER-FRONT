import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfeces/task';
import { Goal } from '../interfeces/goal';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {

  constructor(private http: HttpClient) { }

  getAchievements(){
    return this.http.get<any>('http://127.0.0.1:3000/achievements');
  }
}
