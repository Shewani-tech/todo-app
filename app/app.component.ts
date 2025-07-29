import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentRoute='';
  title = 'todo-list';
  
  constructor(private router: Router) {
    // Watch for route changes

    this.router.events.subscribe(() => {
    this.currentRoute = this.router.url;
    });
  }
  navigate(link: string) {
    this.router.navigate([`/${link}`]);
  }
}
