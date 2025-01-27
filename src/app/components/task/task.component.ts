import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/class';  
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task',
  imports: [CommonModule, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskList: Task[] = [];

  renderAddTaskComponent: boolean = false;  

  ngOnInit(): void {
    this.loadTasksFromLocalStorage();
  }

  onTaskChecked(task: Task): void {
    task.completed = !task.completed;  
    this.saveTasksToLocalStorage();  
  }

  onDelete(task: Task): void{
    if (task.completed) {
      this.taskList = this.taskList.filter(t => t !== task);  
    }
    this.saveTasksToLocalStorage();
  }

  onBtnClick(): void {
    this.renderAddTaskComponent = true; 
  }

  addNewTask(newItem: Task): void {
    this.taskList.push({ title: newItem.title, description: newItem.description });
    this.saveTasksToLocalStorage();  
  }

  loadTasksFromLocalStorage(): void {
    const savedTasks = localStorage.getItem('taskList');
    if (savedTasks) {
      this.taskList = JSON.parse(savedTasks);  
    }
  }

  saveTasksToLocalStorage(): void {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));  
  }
}
