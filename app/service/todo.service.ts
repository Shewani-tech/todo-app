import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
  fav: Todo[] = [];
  todoList: Todo[] = [];

  constructor() {
    this.loadTodosFromStorage();
  }
  ngOnInit(): void {

  }
  deleteTodo(item: Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveTodosToStorage();


  }

  addTodo(title: string) {
    let id = Date.now();
    const item: Todo = {
      id: Date.now(),
      isCompleted: false,
      isFavorite: false,
      date: new Date().toISOString(),
      title: title
    }
    this.todoList.unshift(item);
    console.log(this.todoList);
    this.saveTodosToStorage();

  }
  saveTodosToStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(this.todoList));
    }
  }
  loadTodosFromStorage() {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('todos');
      this.todoList = saved ? JSON.parse(saved) : [];
      console.log('this.todoList', this.todoList);
    }
  }
  updateFav() {
    this.fav = JSON.parse(localStorage.getItem('favorite') ?? '[]');
    console.log('this.fav from service is',this.fav);
    
   
    
  }
}
