import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { LoginComponent } from '../../pages/login/login.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated$;
  }

  logout() {
    this.authService.logout();
    alert('Vous avez été déconnecté.');
  }
}
