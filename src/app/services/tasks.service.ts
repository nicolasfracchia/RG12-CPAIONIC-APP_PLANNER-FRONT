import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfeces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient){ }

  getPendingTasks(){
    return this.http.get<Task[]>('http://127.0.0.1:3000/tasks');
  }

  getTask(taskId:number){
    return this.http.get<Task>(`http://127.0.0.1:3000/tasks/${taskId}`);
  }

  updateTaskStatus(taskId:number, statusId:number){
    return this.http.patch<Task>(`http://127.0.0.1:3000/tasks/${taskId}`, {"status": statusId});
  }
  
  updateTask(taskId:number, frmData: FormData){
    return this.http.put<Task>(`http://127.0.0.1:3000/tasks/${taskId}`, {frmData});
  }

  createTask(frmData: FormData){
    return this.http.post<Task>('http://127.0.0.1:3000/tasks', frmData);
  }

  deleteTask(taskId: number){
    return this.http.delete<Task>(`http://127.0.0.1:3000/tasks/${taskId}`);
  }
}
