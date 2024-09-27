import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  user?: User

  constructor(private authService: AuthService, private router: Router) { }

  login() {

    console.log(
      `Login username:${this.loginForm.get('username')?.value || ''} / Login password: ${this.loginForm.get('password')?.value || ''}`
    );

    this.authService
      .login({
        username: this.loginForm.get('username')?.value || '',
        password: this.loginForm.get('password')?.value || ''
      })
      .subscribe(({
        next: () => {
          alert('Connexion réussi.');
          this.router.navigate(['/home']);
        }, error: (err) => {
          console.error("login error:", err)
        }
      }));
  }
}
