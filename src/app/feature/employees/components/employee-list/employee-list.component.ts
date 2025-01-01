import { EmployeeService } from './../../service/employee/employee.service';
import { Component } from '@angular/core';
import { Employee } from '../../../types/employee/employee';
import { Department, EmployeeStatus } from '../../../types/enums';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
