import { Component, Input } from '@angular/core';
import { Employee } from '../../../types/employee/employee';

@Component({
  selector: 'app-employee-card',
  standalone: false,
  
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() employee: Employee = {} as Employee;

  constructor() {}

  
}
