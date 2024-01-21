import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interfeces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(){
    return this.http.get<Note[]>('http://127.0.0.1:3000/notes');
  }
}
