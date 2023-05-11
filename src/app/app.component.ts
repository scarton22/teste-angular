import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === null) {
      localStorage.setItem('loggedIn', 'false');
    }
  }
}
