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
  fav: Todo[] = [];
  todos: Todo[] = [];

  viewList: boolean = true;
  isCompleted: boolean = false;
  constructor(private toasterService: ToastrService, public route: ActivatedRoute) {
  }
  ngOnInit() {
    this.todos = this.listService.todoList;
  }
  onChange(item: any) {
    item.isCompleted = !item.isCompleted;
    if (item.isCompleted) {
      this.toasterService.success(`Todo "${item.title}" marked as completed`, 'Completed');
    }
  }

  deleteTodo(item: Todo) {
    this.listService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  }

 isFavorite(item: any) {
  item.isFavorite = !item.isFavorite;
  if (item.isFavorite) {
    this.toasterService.success('Todo Added to Favorite');
  //  if (!this.fav.some(todo => todo.id === item.id)) {
      this.fav.push(item);
      localStorage.setItem("favorite", JSON.stringify(this.fav));
   // }
  } else {
    this.toasterService.error('Todo Removed from Favorite');
    let index = this.fav.findIndex(favItem => favItem.id === item.id);
    console.log('index is',index);
    
     if (index !== -1) {
      this.fav.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(this.fav));
    }
  }
 this.listService.updateFav();
}

  trackById(index: number, todo: Todo) {
    return todo.id;
  }
  toggleClass(item: any) {



    return item.isCompleted
      ? { 'list-group-item-success': true, 'border-primary': true }
      : {};
  }
}



