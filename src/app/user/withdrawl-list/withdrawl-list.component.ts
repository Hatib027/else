import { Component, OnInit } from '@angular/core';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdrawl-list',
  templateUrl: './withdrawl-list.component.html',
  styleUrls: ['./withdrawl-list.component.css']
})
export class WithdrawlListComponent implements OnInit {

  constructor(private withdrawlService: WithdrawlService) { }

  investmentMaster: any;
  selected: any = 'Ib';
  ib: any;
  upi: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];
  ngOnInit(): void {

    this.withdrawlService.getUserInvestment().subscribe(
      (data: any) => {

        this.investmentMaster = data;


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

    this.withdrawlService.withdrawlListUserUpi().subscribe(
      (data) => {
        this.upi = data;
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

    this.withdrawlService.withdrawlListUserIb().subscribe(
      (data) => {
        this.ib = data;
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
    this.ib;
  }
  onTableSizeChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.ib;
  }

  onTableDataUpiChange(event: any) {
    this.page = event;
    this.upi;
  }
  onTableSizeUpiChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.upi;
  }

}
