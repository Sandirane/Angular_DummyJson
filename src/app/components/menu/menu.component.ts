import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HomeComponent } from "@app/pages/home/home.component";
import { LoginComponent } from "@app/pages/login/login.component";
import { ProfileComponent } from "@app/pages/profile/profile.component";
import { AuthService } from "@app/services/auth.service";
import { LoadingService } from "@app/services/loading.service";
import { Observable } from "rxjs";

 

interface Action {
  title: string;
  route: string;
  icon: string;
}

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
  currentAction: Action | null = null;

  actions: Array<Action> = [
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

  setCurrentAction(action: Action) {
    this.currentAction = action;
  }

  logout() {
    this.authService.logout();
  }
}
