import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loggedIn: boolean;
  constructor(private router: Router) { }

  onSubmit() {
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('loggedIn', 'true'); // Atualiza o valor loggedIn para 'true'
      const loggedIn = localStorage.getItem('loggedIn');
      if (loggedIn === 'true') {
        this.router.navigate(['/home']);
      }
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }


}
