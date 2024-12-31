import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponentComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
