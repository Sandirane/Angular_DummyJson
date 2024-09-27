import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "@app/models/user";
import { AuthService } from "@app/services/auth.service"; 
import { AlertComponent } from "@app/components/alert/alert.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  user?: User

  authenticationFailed = false;
  msgSuccess = false;
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authenticationFailed = false;

    this.authService.login({
      username: this.loginForm.get('username')?.value || '',
      password: this.loginForm.get('password')?.value || ''
    })
      .subscribe(({
        next: () => {
          this.msgSuccess = true;
          this.successMessage = 'Connexion réussie.';
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);
        },
        error: () => {
          this.authenticationFailed = true;
          this.errorMessage = 'Problème d\'e-mail ou mot de passe.';
        }
      }));
  }
}
