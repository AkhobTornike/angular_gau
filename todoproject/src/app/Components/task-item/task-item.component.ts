import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Interface/task';
import { TaskService } from '../../Services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private taskService: TaskService) {}

  deleteTask(id: number) {
    this.taskService.DeleteTask(id);
    this.taskDeleted.emit(id);
    console.log(`Task with id ${id} deleted`);
  }
}
