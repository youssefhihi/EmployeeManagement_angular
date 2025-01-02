import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-msg',
  standalone: false,
  
  templateUrl: './alert-msg.component.html',
  styleUrl: './alert-msg.component.css'
})
export class AlertMsgComponent {
  @Input() message: string = '';
  @Input() type: string = '';

  closeAlert() {
    this.message = '';
    this.type = '';
  }
  
}
