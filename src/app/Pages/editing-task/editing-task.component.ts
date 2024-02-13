import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../Shared/Services/storage.service';

@Component({
  selector: 'app-editing-task',
  templateUrl: './editing-task.component.html',
  styleUrl: './editing-task.component.scss'
})
export class EditingTaskComponent implements OnInit{
  @Input() tasksArray: any[] = [];
  @Input() showMoreArray: boolean[] = [];
  @Input() idx!: number;
  constructor(private storageService: StorageService){}
  ngOnInit(): void {
    
  }

  deleteTask(index: number) {
    this.tasksArray.splice(index, 1);
    this.storageService.setTasksArray(this.tasksArray);
  }
  renameTask(newTaskText: string, index: number) {
    if (newTaskText != '') {
      this.tasksArray[index].value = newTaskText;
      this.storageService.setTasksArray(this.tasksArray);
    } else {
      return;
    }
  }
  saveEditing(newTaskText: string, index: number) {
    this.renameTask(newTaskText, index);
  }
  clickedOut(event: Event){
    if((event?.target as HTMLElement).className === "wrapper-editing") {
      this.showMoreArray.fill(false)
    }
  }
}
