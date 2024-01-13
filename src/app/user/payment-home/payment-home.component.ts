import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
  styleUrls: ['./payment-home.component.css']
})
export class PaymentHomeComponent implements OnInit {

  constructor(private paymentService: PaymentServiceService, private withdrawlService: WithdrawlService, private elementRef: ElementRef) { }
  investmentMaster: any = {
    currentInvestment: '',

  };
  payment: any;
  upi: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];

  selected: any = 'Ib';

  ngOnInit(): void {





    this.paymentService.getPaymentHistoryIB().subscribe(
      (data) => {
        this.payment = data;
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

    if (this.payment == null) {
      this.selected = 'upi';
    }

    this.paymentService.getPaymentHistoryUpi().subscribe(
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

  }
  onTableDataChange(event: any) {
    this.page = event;
    this.payment;
  }
  onTableSizeChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.payment;
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
