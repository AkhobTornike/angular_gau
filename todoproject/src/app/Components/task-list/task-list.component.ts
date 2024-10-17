import { Component, OnInit } from '@angular/core';
import { Task } from '../../Interface/task';
import { TaskService } from '../../Services/task.service';
import { TaskItemComponent } from "../task-item/task-item.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  searchQuery: string = '';
  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.GetTasks().filter(task => task.title.includes(this.searchQuery));
  }

  onTaskDeleted(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
