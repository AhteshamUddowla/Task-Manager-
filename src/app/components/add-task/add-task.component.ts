import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  task: Task = {
    title: '',
    description: ''
  };

  @Output() newItemEvent = new EventEmitter<Task>();

  onBtnClick(): void {
      this.newItemEvent.emit(this.task);
      this.task = {
        title: '',
        description: ''
      }
    }
}
