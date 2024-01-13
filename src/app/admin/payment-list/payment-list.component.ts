import { Component, OnInit } from '@angular/core';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  constructor(private paymentService: PaymentServiceService,) { }

  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];
  payment: any;
  upi: any;
  selected: any = 'Ib';


  onTableDataChange(event: any) {
    this.page = event;
    this.payment;
  }
  onTableSizeChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.payment;
  }

  ngOnInit(): void {



    this.paymentService.getAllIfcc().subscribe(
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

    this.paymentService.getAllUpi().subscribe(
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

  }

}
