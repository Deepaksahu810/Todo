import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css'],
})
export class AllTodoComponent implements OnInit {
  AllTodo: Todo[] = [];
  filteredString:string='';
  constructor(private service: TodoDataService) {}
  faCoffee = faTrash;
  getUsers(): void {
    this.service.getTodo().subscribe((data: Todo[]) => (this.AllTodo = data));
  }

  delete(id: number) {
    this.service.deleteTodo(id).subscribe();
    setTimeout( () => {
      this.getUsers();
    
 }, 1000);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo deleted',
      showConfirmButton: false,
      timer: 1500
    })
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
