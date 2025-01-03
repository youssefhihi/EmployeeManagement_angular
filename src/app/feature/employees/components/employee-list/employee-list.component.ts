import { EmployeeService } from './../../service/employee/employee.service';
import { Component } from '@angular/core';
import { Employee } from '../../../types/employee/employee';
import { ToastMsgService } from '../../../../core/service/toastMsg/toast-msg.service';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  msg: string = '';
  alertType: string = '';
  showAlert: boolean = false;

  constructor(private service: EmployeeService, private toastMsg: ToastMsgService) {}

  ngOnInit() {
    let msg = this.toastMsg.getMsg();
    if (msg != null && msg.message != null && msg.type != null) {
      console.log(msg);
      this.triggerAlert(msg.message, msg.type);
    }
    this.service.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  triggerAlert(message: string, type: string) {
    this.msg = message;
    this.alertType = type;
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 3000); 
  }
}
