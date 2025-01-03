import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { Employee } from '../../../types/employee/employee';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should be create a new employee', () => {
    service.createEmployee({} as Employee).subscribe();
    expect(service).toBeTruthy();

  });
});
