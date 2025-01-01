import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() required: boolean = true;
  @Input() type: string = 'text'; 
  @Input() placeholder: string = ''; 
  @Input() value: string = ''; 
}
