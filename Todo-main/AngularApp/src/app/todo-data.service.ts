import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  private backendurl: string = 'http://localhost:3000/api/Todo';
  constructor(private http: HttpClient) { }
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.backendurl)
  }
  addTodo(post: Todo): Observable<Todo> {
    return this.http.post<Todo>("http://localhost:3000/api/NewTodo", post) 
  }
  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:3000/api/getTodoById/${id}`)
  }
  updateTodo(post: Todo,id: number): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/api/UpdateTodo/${id}`, post) 
  }
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/api/DeleteTodo/${id}`) 
  }

}
