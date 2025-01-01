import { Injectable } from '@angular/core';
import { Employee } from '../../../types/employee/employee';
import { catchError, map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

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
      catchError((error) => of(error.message))
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
      catchError((error) => of(error.message))
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
      catchError((error) => of(error.message))
    );
  }

  getEmployees():Observable<Employee[]>{
    const employees = localStorage.getItem("employees");
    return of(employees? JSON.parse(employees) : []);
  }

  private changeLocalStorage(employees: Employee[]) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
}
