import { Component, OnInit } from '@angular/core';
import { ManagementEmployeesService } from '../../services/management-employees.service';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  employeesData;
  constructor(ManagementEmployeesService: ManagementEmployeesService) {
    this.employeesData = ManagementEmployeesService.getEmployees();
    console.log('Data ', this.employeesData);
  }
  deletedEmployee(ev) {
    if (ev.deleted) {
      console.log('the user with the id ', ev.id, ' has been deleted.');
      this.employeesData = this.employeesData.filter((obj) => {
        console.log('obj.id ', obj.Id, 'ev.id ', ev.id);
        return obj.Id !== ev.id;
      });
      console.log('new array ', this.employeesData);
    }
  }
  ngOnInit(): void {}
}
