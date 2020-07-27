import { Component, OnInit } from '@angular/core';
import { ManagementEmployeesService } from '../../services/management-employees.service';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  constructor(ManagementEmployeesService: ManagementEmployeesService) {
    console.log('Data ', ManagementEmployeesService.getEmployees());
  }

  ngOnInit(): void {}
}
