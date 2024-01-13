import { Component, OnInit } from '@angular/core';
import { AdminGlobalService } from 'src/app/services/admin-global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private adminService: AdminGlobalService) { }

  report: any = '1';
  ngOnInit(): void {
  }
  getReport(): void {
    this.adminService.report(this.report).subscribe((data: any) => {
      const blobUrl = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      if (this.report == 1) {


        a.download = 'Deposites-UPI.xls';

      }
      if (this.report == 2) {

        a.download = 'Deposites-Internet-Banking.xls';
      }
      if (this.report == 3) {

        a.download = 'Withdrawl-Internet-Banking.xls';
      }
      if (this.report == 4) {

        a.download = 'Withdrawl-UPI.xls';
      }
      if (this.report == 5) {

        a.download = 'Levelwise-Investment.xls';
      }
      if (this.report == 6) {

        a.download = 'Referral-Report.xls';
      }
      // Set the desired file name with .xls extension
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobUrl);
    }
      ,
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
}
