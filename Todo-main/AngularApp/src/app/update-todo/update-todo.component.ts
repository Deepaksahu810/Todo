import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Todo } from '../todo';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { TodoDataService } from '../todo-data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  data:boolean=false;
TodoId:number=0
  TodoDetails: Todo | undefined;
  TodoForm:FormGroup=new FormGroup({});
  constructor(private activatedRouter:ActivatedRoute,private service:TodoDataService ,private formBuilder:FormBuilder,private  router: Router) { }
 
  ngOnInit(): void {
  this.activatedRouter.params.subscribe(data=>{
    this.TodoId=data.id
  })
  if(this.TodoId !==0){
    this.service.getTodoById(this.TodoId)
    .toPromise()
    .then(data=>{
      this.TodoDetails=data;
        this.TodoForm = this.formBuilder.group({
        title: new FormControl(this.TodoDetails.title),
        description: new FormControl(this.TodoDetails.description ),
        status:new FormControl(this.TodoDetails.status)
      });
      this.data=true
    })
    .catch(err=>{
      console.log(err);
    })
  }
  }
  onSubmit(){
    this.service.updateTodo(this.TodoForm.value,this.TodoId).subscribe()
    Swal.fire({
      title: 'Successfully updated',
      showCancelButton: true,
      confirmButtonText: 'ok',
      confirmButtonColor: '#000080',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['']);
        
      }
    })
  }
}
