import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-options',
  standalone: false,
  
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.css'
})
export class SelectOptionsComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() options: { value: string | number; label: string }[] = [];
  @Input() required: boolean = false;
}
