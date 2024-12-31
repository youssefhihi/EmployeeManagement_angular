import { Department, EmployeeStatus } from "../enums";

export interface Employee {
    id: string;
    name: string;
    email: string;
    phone: string;
    dateOfBirth: Date;
    salary: number;
    department: Department;
    hireDate: Date;
    jobTitle : string;
    status: EmployeeStatus;
    skills: string[]; 
}
