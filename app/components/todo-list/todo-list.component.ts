import { Component, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';

import { Todo } from '../../model/todo';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { todo } from 'node:test';
import { ActivatedRoute } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  listService = inject(TodoService);
  todos: Todo[] = [];
  
  viewList: boolean = true;
  completed: boolean = false;
  constructor(private toasterService: ToastrService, public route: ActivatedRoute) {

  
   

  }
  ngOnInit(){
    
     this.todos = this.listService.todoList;
    console.log(this.todos);
    
  }
  onChange() {
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';

  }

  deleteTodo(item: Todo) {
 
    this.listService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');


  }
  isFavorite(item:any) {
   item.isFavorite = !item.isFavorite;
    if (item.isFavorite) {

      this.toasterService.success('Todo Added to Favorite');

      this.listService.fav.unshift(item);

      localStorage.setItem("favorite", JSON.stringify(this.listService.fav));

    }
    else {
      this.toasterService.error('Todo Removed from Favorite');
      let index = this.listService.todoList.indexOf(item);
      this.listService.fav.splice(index, 1);

      localStorage.setItem("favorite", JSON.stringify(this.listService.fav));

    }
   }
   trackById(index: number, todo: Todo) {
  return todo.id;
}


}
