import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ReferService } from 'src/app/services/refer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-refer-home',
  templateUrl: './refer-home.component.html',
  styleUrls: ['./refer-home.component.css']
})
export class ReferHomeComponent implements OnInit {

  constructor(public loginService: LoginService, private referService: ReferService) { }

  user: any = [{
    firstName: '',
    email: '',
    phone: ''
  }]
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];

  text: any;
  value: any;
  ngOnInit(): void {

    this.value = "https://bricksfunds.web.app/register" + "         Referral Code Is " + this.loginService.getUser().yourrefercode;
    this.text = this.loginService.getUser().yourrefercode;
    this.referService.getYourRefer(this.text).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {

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