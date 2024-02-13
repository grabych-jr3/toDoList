import { Component, OnInit } from '@angular/core';
import { Task } from '../../Shared/Interfaces/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../Shared/Services/storage.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent implements OnInit {
  taskForm!: FormGroup;
  tasksArray: any[] = [];
  doneTasksArray: any[] = [];
  showMoreArray: boolean[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      taskValue: new FormControl('', [Validators.required])
    })
    this.tasksArray = this.storageService.getTasks() || [];
    this.showMoreArray = new Array(this.tasksArray.length).fill(false);
  }
  addTask(text: string) {
    const task: Task = {
      value: text,
      isComplete: false
    };
    this.tasksArray.push(task);
    this.taskForm.reset();
    this.storageService.setTasksArray(this.tasksArray);
  }
  changeStatus(task: Task) {
    task.isComplete = !task.isComplete;
    this.storageService.setTasksArray(this.tasksArray)
  }
  closeEditing(){
    this.showMoreArray.fill(false);
  }
  deleteAll(){
    this.tasksArray = [];
    this.storageService.setTasksArray(this.tasksArray);
  }
  showDone(){
    this.tasksArray = this.tasksArray.filter((item: Task) => item.isComplete === true);
  }
  showAll(){
    this.tasksArray = this.storageService.getTasks() || [];
  }
}
