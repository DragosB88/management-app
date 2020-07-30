import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employeeData;
  @Output() deleteEntry = new EventEmitter();
  isDeleted: boolean = false;
  constructor() {}
  deleteEmployee() {
    this.isDeleted = true;

    let code = {
      deleted: this.isDeleted,
      id: this.employeeData.Id,
    };
    console.log('CODE: ', code);
    this.deleteEntry.emit(code);
  }
  editEmployee(employee) {
    console.log('edit employee ', employee);
  }
  ngOnInit(): void {}
}
