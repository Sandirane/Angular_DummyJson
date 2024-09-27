import { Component } from '@angular/core';
import { StateControlService } from '@app/services/state-control.service';

@Component({
  selector: 'app-card-announce',
  standalone: true,
  imports: [],
  templateUrl: './card-announce.component.html',
  styleUrl: './card-announce.component.css'
})
export class CardAnnounceComponent {
  constructor(public stateControl: StateControlService) { }
}
