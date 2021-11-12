import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string){
    if (value.length===0 || filterString==='') {
      return value;
    }
    const todos=[];
    for(const todo of value){
      if (todo['title']===filterString) {
        todos.push(todo);
      }

    }
    return todos;
  }

}
