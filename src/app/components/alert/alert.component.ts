import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() type: 'success' | 'danger' = 'success';
  @Input() message: string = '';
  @Input() visible: boolean = false;

  get alertClass() {
    return `alert alert-${this.type}`;
  }
}
