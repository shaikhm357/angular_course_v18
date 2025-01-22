import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
// import { EventEmitter } from 'stream';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent , DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  @Output() complete = new EventEmitter<string>(); //emit own custom event
  onCompleteTaskT() {
    this.complete.emit(this.task.id)
  }
}