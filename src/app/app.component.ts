import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy.user';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_course_v18';
  users = DUMMY_USERS;
  selectedUserId = 'u2';

  get selectedUser() {
    return this.users.find((usr) => usr.id === this.selectedUserId)!;
  }

  onSelectUserr(id: string) {
    // console.log('Selected user with id ' + id)
    this.selectedUserId = id;
  }
}
