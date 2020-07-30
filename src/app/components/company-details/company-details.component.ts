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
    // get data from service
    this.employeesData = ManagementEmployeesService.getEmployees();
    // sort alphabetically
    this.employeesData = this.sortAlphabetically(this.employeesData);
    console.log('Data ', this.employeesData);
  }

  sortAlphabetically(array) {
    return array.sort(function (a, b) {
      if (a.FirstName < b.FirstName) {
        return -1;
      }
      if (a.FirstName > b.FirstName) {
        return 1;
      }
      return 0;
    });
  }

  deletedEmployee(ev) {
    // check if user has been marked for deletion
    if (ev.deleted) {
      // delete user
      this.employeesData = this.employeesData.filter((obj) => {
        return obj.Id !== ev.id;
      });
    }
  }
  ngOnInit(): void {}
}
