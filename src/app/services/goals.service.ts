import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from '../interfeces/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { }

  getPendingGoals(){
    return this.http.get<Goal[]>('http://127.0.0.1:3000/goals');
  }

  getFinishedGoals(){
    return this.http.get<Goal[]>('http://127.0.0.1:3000/goals');
  }

  updateGoalStatus(goalId:number, statusId:number){
    return this.http.patch<Goal>(`http://127.0.0.1:3000/goals/${goalId}`, {"status": statusId});
  }
}
