import { Component } from '@angular/core';
import { ITask } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule,TaskComponent,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
tasks: ITask[] = [
     { id: 1, description: 'Finish Angular project', category: 'Work' },
    { id: 2, description: 'Study for exams', category: 'Study' },
    { id: 3, description: 'Morning run for 30 mins', category: 'Exercise' }
  ];

  newTask: ITask = { id: 0, description: '', category: '' };

  addTask() {
    if (this.newTask.description && this.newTask.category) {
      const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
      this.tasks.push({
        id: newId,
        description: this.newTask.description,
        category: this.newTask.category
      });
      // Reset form
      this.newTask = { id: 0, description: '', category: '' };
    }
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}