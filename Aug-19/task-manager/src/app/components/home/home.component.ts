import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-home',
  imports: [TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}