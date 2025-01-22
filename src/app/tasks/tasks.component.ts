import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
// import { DUMMY_TASKS } from './../dummy.task'
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponents {
  @Input({ required: true }) userId!: string
  @Input() name!: string
  isAddingTask = false
  private tasksService = new TasksService()


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTasks(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId)
    this.isAddingTask = false

  }

}
