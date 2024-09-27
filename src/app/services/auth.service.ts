import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthResponse } from "@app/models/user/authResponse";
import { User } from "@app/models/user/user";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.baseUrl;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) { }

  login(user: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, user)
      .pipe(
        tap((response: AuthResponse) => this.doLoginUser(user.username, JSON.stringify(response)))
      );
  }

  private doLoginUser(username: string, token: string) {
    console.log('Token stored:', token);
    this.loggedUser = username;
    this.storeJwtToken(token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    console.log('storeJwtToken:', jwt);
    const tokenObj = JSON.parse(jwt);
    const accessToken = tokenObj.accessToken;
    localStorage.setItem(this.JWT_TOKEN, accessToken);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  getCurrentAuthUser(): Observable<User> {
    const token = localStorage.getItem(this.JWT_TOKEN); 
    if (token) {
      console.log('getCurrentAuthUser:', token);
      return this.http.get<User>(`${this.apiUrl}/auth/me`);
    } else {
      throw new Error('error: token not found');
    }
  }
}
