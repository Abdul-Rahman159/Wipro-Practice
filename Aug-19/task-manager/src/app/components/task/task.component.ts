import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() task!: ITask;
  @Output() deleteTask = new EventEmitter<number>();

  onDelete() {
    this.deleteTask.emit(this.task.id);
  }
}