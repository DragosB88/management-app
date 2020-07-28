import { Component, OnInit } from '@angular/core';
import { ManagementEmployeesService } from '../../services/management-employees.service';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  employeesData: {};
  constructor(ManagementEmployeesService: ManagementEmployeesService) {
    this.employeesData = ManagementEmployeesService.getEmployees();
    console.log('Data ', this.employeesData);
  }

  ngOnInit(): void {}
}
