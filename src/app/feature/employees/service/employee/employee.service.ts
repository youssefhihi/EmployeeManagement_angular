import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Employee } from '../../../types/employee/employee';
import {  map, Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  createEmployee(employee:Employee): Observable<void> {
    console.log(employee);
    employee.id = Date.now().toString();
    return this.getEmployees().pipe(
      map((employees: Employee[]) => {
        employees.push(employee);
        this.changeLocalStorage(employees);
      })
    )
  }

  updateEmployee(employee: Employee): Observable<string> {
    console.log(employee);
    return this.getEmployees().pipe(
      map((employees: Employee[]) => {
        const index = employees.findIndex((e) => e.id === employee.id);
        if (index === -1) {
          throw new Error('Employee not found');
        }
        employees[index] = employee;
        this.changeLocalStorage(employees);
        return 'Employee updated successfully';
      }),
    );
  }
  

  deleteEmployee(employee:Employee): Observable<string>{
    return this.getEmployees().pipe(
      map((employees: Employee[]) =>{
        const index = employees.findIndex((e) => e.id === employee.id);
        if(index === -1){
          throw new Error("employee not found with id " + employee.id)
        }
        employees.splice(index, 1)
        this.changeLocalStorage(employees);
        return "employee deleted successfully"
      }),
    );
  }
  
  getEmployeeById(id: string): Observable<Employee> {
    return this.getEmployees().pipe(
      map((employees: Employee[]) => {
        const employee = employees.find((e) => e.id === id);
        if (!employee) {
          throw new Error('Employee not found');
        }
        return employee;
      }),
    );
  }

  getEmployees():Observable<Employee[]>{
    let employees;
    if (isPlatformBrowser(this.platformId)) {
       employees = localStorage.getItem("employees");
    }
    return of(employees? JSON.parse(employees) : []);
  }

  private changeLocalStorage(employees: Employee[]) {
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  }
}
