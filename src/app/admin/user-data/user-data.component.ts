import { Component, OnInit } from '@angular/core';
import { AdminGlobalService } from 'src/app/services/admin-global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user: any = [{
    username: '',
    email: '',
    phone: ''
  }]
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];
  constructor(private admiGlobalService: AdminGlobalService) { }

  ngOnInit(): void {

    this.admiGlobalService.getAllUser().subscribe(
      (data: any) => {
        this.user = data;
      },
      (error: any) => {

        window.location.reload();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error Or Session Expired",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )

  }
  onTableDataChange(event: any) {
    this.page = event;
    this.user;
  }
  onTableSizeChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.user;
  }


}
