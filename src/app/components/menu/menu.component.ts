import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { LoginComponent } from '../../pages/login/login.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

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

  navbarCollapsed = true;
  currentAction: any
  actions: Array<any> = [
    { title: "Home", "route": "/home", icon: "house" },
    { title: "Products", "route": "/products", icon: "box" },
    { title: "Profile", "route": "/profile", icon: "person" },
  ]

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(
    private authService: AuthService,
    public loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated$;
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  logout() {
    this.authService.logout();
    alert('Vous avez été déconnecté.');
  }
}
