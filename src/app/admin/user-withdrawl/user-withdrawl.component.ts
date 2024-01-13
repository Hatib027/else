import { Component, OnInit } from '@angular/core';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-withdrawl',
  templateUrl: './user-withdrawl.component.html',
  styleUrls: ['./user-withdrawl.component.css']
})
export class UserWithdrawlComponent implements OnInit {

  constructor(private withDrawlService: WithdrawlService) { }

  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];
  Ib: any;
  upi: any;
  selected: any = 'Ib';


  onTableDataChange(event: any) {
    this.page = event;
    this.Ib;
  }
  onTableSizeChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.Ib;
  }

  ngOnInit(): void {



    this.withDrawlService.getIbList().subscribe(
      (data) => {
        this.Ib = data;
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


    this.withDrawlService.getUpiList().subscribe(
      (data: any) => {
        this.upi = data;
      },
      (error: any) => {


        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )

  }

}
