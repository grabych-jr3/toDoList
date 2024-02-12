import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setTasksArray(tasksArray: any) {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }
  getTasks() {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : null;
  }
}
