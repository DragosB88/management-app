import { Injectable } from '@angular/core';
import * as data from '../../assets/json-data/employees.json';
@Injectable({
  providedIn: 'root',
})
export class ManagementEmployeesService {
  constructor() {}

  getEmployees() {
    return data;
  }

  // employeesArray:
}
