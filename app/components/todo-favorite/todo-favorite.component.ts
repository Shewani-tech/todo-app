import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { log } from 'node:console';

@Component({
  selector: 'app-todo-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-favorite.component.html',
  styleUrl: './todo-favorite.component.scss'
})
export class TodoFavoriteComponent {
  listService = inject(TodoService);
  constructor(){
  console.log('listService is',this.listService.fav);
  
  }
}
