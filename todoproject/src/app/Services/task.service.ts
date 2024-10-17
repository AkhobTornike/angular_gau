import { Injectable } from '@angular/core';
import { Task } from '../Interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, title: 'Get a new helmet', category: 'Uncategorized', completed: false },
    { id: 2, title: 'Purchase Milk & Corn Flakes', category: 'Groceries', completed: false },
    { id: 3, title: 'Pay mortgage', category: 'Payments', completed: false },
    { id: 4, title: 'Complete Assignments', category: 'College', completed: false },
    { id: 5, title: 'Replace laptop\'s screen', category: 'Uncategorized', completed: false }
  ]
  
  constructor() { }

  GetTasks(): Task[] {
    return this.tasks;
  }

  AddTask(task: Task): void {
    this.tasks.push(task);
  }

  DeleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  } 
}
