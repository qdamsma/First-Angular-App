import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = signal('first-angular-app');

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
  }
}
