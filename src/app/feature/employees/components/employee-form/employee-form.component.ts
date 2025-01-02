import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee/employee.service';
import { Department, EmployeeStatus } from '../../../types/enums';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../types/employee/employee';
import { ToastMsgService } from '../../../../core/service/toastMsg/toast-msg.service';


@Component({
  selector: 'app-employee-form',
  standalone: false,
  
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  employeeForm!: FormGroup;
  employeeStatuses = Object.values(EmployeeStatus);
  departments = Object.values(Department);
  employeeId: string | null = null;
  isSubmitted = false;
  isUpdate = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private toastMsg: ToastMsgService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = params['id']; 
      this.isUpdate = !!this.employeeId;
    });
  
    this.employeeForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]+@{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4}$/)]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        jobTitle: ['', Validators.required],
        salary: ['', [Validators.required, Validators.min(1)]],
        dateOfBirth: ['', Validators.required],
        hireDate: ['', Validators.required],
        department: ['', Validators.required],
        status: ['', Validators.required],
    });
    if (this.isUpdate && this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe( {
        next: (employee: Employee) => {
          this.employeeForm.patchValue(employee);
        },
        error: (error) => {
          console.log("sdfrf",error);
        }
      });
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    if (this.isUpdate && this.employeeId) {
      let employee : Employee = this.employeeForm.value;
        employee.id = this.employeeId;
        let msg:{message: string, type: string} = {message: '', type: ''};
        
        this.employeeService.updateEmployee(employee).subscribe({
          next: (message) => {
            msg = {message: message, type: 'success'};
            this.employeeForm.reset();
            this.isSubmitted = false;
          },
          error: (error) => {
            msg = {message: error, type: 'error'};

          },
          complete: () => {
            this.toastMsg.setMsg(msg.message, msg.type);
            this.router.navigate(['/employees']);
          },
        });
         
    }else{
      this.employeeService.createEmployee(this.employeeForm.value).subscribe(() => {
        this.employeeForm.reset();
        this.isSubmitted = false;
      });
    }
  }
  
 
 
  isFieldInvalid(field: string): boolean {
    const control = this.employeeForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  getErrorMessage(field: string): string | null {
    const control = this.employeeForm.get(field);
    if (!this.isFieldInvalid(field)) return null;
    if (control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }
    if (control?.hasError('pattern')) {
      return 'Invalid ' + field + ' format.';
    }
    return null;
  }
}
