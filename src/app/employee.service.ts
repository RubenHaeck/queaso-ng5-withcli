import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Array<Employee> {
    const employees: Array<Employee> = new Array<Employee>();
    employees.push(new Employee('De Sutter', 'Filip'));
    employees.push(new Employee('Haeck', 'Ruben'));

    return employees;
  }

}
