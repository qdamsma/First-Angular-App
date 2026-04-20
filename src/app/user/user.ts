import { Component, output, input, computed, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  onSelectUser() {
    this.select.emit(this.id());
  }
}
