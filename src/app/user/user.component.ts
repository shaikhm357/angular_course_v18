import { Component, Input, Output, EventEmitter, output } from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string
// }

interface User {
  id: string;
  name: string;
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<string>();
  // select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
