import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './../dummy.task'
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
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
  tasks = DUMMY_TASKS
  isAddingTask = false

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((tsk) => tsk.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTasks(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false

  }

}
