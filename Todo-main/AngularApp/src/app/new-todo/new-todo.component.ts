import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { TodoDataService } from '../todo-data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  TodoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status:new FormControl('', Validators.required)
  });
  constructor(private service:TodoDataService,private  router: Router) { }
  onSubmit() {
    this.service.addTodo(this.TodoForm.value).subscribe()
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo created',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout( () => {
      this.router.navigate(['']);
 }, 2000);
  }
 
  ngOnInit(): void {
  }

}
