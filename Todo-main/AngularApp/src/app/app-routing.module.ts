import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { AllTodoComponent } from './all-todo/all-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const routes: Routes = [

  { path: '', component: AllTodoComponent },
  { path: 'newTodo', component: NewTodoComponent },
  { path: 'TodoUpdate/:id', component: UpdateTodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
