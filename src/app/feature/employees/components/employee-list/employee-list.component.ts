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
  employees: Employee[] = [
    {
      id: "dhqfkdshf",
      name: 'John Doe',
      email: 'XKXK3@example.com',
      phone: '123-456-7890',
      dateOfBirth: new Date(),
      salary: 50000,
    department: Department.IT,
      hireDate: new Date(),
      jobTitle: 'Manager',
      status: EmployeeStatus.Active,
      skills: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  constructor(private service: EmployeeService) {}

  ngOninit() {
    this.service.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
