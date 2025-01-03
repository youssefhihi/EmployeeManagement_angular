import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../../../types/employee/employee';
import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee/employee.service';
import { ToastMsgService } from '../../../../core/service/toastMsg/toast-msg.service';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  employee: Employee = {} as Employee
  showConfirmDialog = false; 

  openConfirmDialog(): void {
    this.showConfirmDialog = true;
  }

  cancelDelete(): void {
    this.showConfirmDialog = false;
  }
  constructor( private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private toastMsg: ToastMsgService
              ) {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employee.id = params['id']; 
    });
    if(this.employee.id) {
      this.employeeService.getEmployeeById(this.employee.id).subscribe( {
        next: (employee: Employee) => {
          this.employee = employee
          console.log(this.employee);
        },
        error: (error) => {
          this.toastMsg.setMsg(error, 'error');
          console.log("sdfrf",error);
          this.router.navigate(['/employees']);
        }
      });
    }
  }

  confirmDelete(): void {
    if (this.employee.id) {
      let msg:{message: string, type: string} = {message: '', type: ''};

      this.employeeService.deleteEmployee(this.employee).subscribe({
        next: (message) => {
          msg = {message: message, type: 'success'};
          
        },
        error: (error) => {
          msg = {message: error, type: 'error'};
        },
        complete: () => {
          this.toastMsg.setMsg(msg.message, msg.type);
          this.router.navigate(['/employees']); 
          this.showConfirmDialog = false;
        }
      }
      ); 
    }
  }
}
