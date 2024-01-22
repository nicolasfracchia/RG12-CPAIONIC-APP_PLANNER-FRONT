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

  getGoal(goalId:number){
    return this.http.get<Goal>(`http://127.0.0.1:3000/goals/${goalId}`);
  }

  updateGoal(goalId:number, frmData: FormData){
    return this.http.put<Goal>(`http://127.0.0.1:3000/goals/${goalId}`, {frmData});
  }

  createGoal(frmData: FormData){
    return this.http.post<Goal>('http://127.0.0.1:3000/goals', frmData);
  }

  deleteGoal(goalId: number){
    return this.http.delete<Goal>(`http://127.0.0.1:3000/goals/${goalId}`);
  }
}
