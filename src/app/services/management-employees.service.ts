import { Injectable } from '@angular/core';
import { EmployeeData } from './../types/services/_employees.types';
// TODO: replace with firebase cloud
import * as data from '../../assets/json-data/employees.json';
@Injectable({
  providedIn: 'root',
})
export class ManagementEmployeesService {
  employeesArray = <any>data;
  constructor() {}

  getEmployees() {
    return this.employeesArray.default;
  }
}
