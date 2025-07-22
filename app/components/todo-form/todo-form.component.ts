import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
 todo = '';

  constructor(public todoService: TodoService) {
      console.log('coming here');
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoService.addTodo(this.todo);
    
  }
}
