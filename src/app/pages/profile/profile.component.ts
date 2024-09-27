import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { User } from "@app/models/user/user";
import { AuthService } from "@app/services/auth.service";
 
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  user: User | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentAuthUser()
      .subscribe(
        {
          next: (userData) => { this.user = userData; },
          error: (error) => { console.error('Erreur lors de la récupération du profil', error); }
        }
      );
  }

}
