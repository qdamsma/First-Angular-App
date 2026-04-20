import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }


  protected readonly title = signal('first-angular-app');

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
