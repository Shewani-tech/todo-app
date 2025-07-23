import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
 todo = '';

  constructor(public todoService: TodoService,private toasterService: ToastrService) {
      console.log('coming here');
   }

  ngOnInit(): void {
  }

  onSubmit(item:string){
    this.todoService.addTodo(this.todo);
      this.toasterService.error(`Todo ${item} Added!`, 'Added Successfuly');
    this.todo='';
    
  }
}
