import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFavoriteComponent } from './todo-favorite.component';

describe('TodoFavoriteComponent', () => {
  let component: TodoFavoriteComponent;
  let fixture: ComponentFixture<TodoFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
