import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { BankdetailsAdminComponent } from '../bankdetails-admin/bankdetails-admin.component';
@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.css']
})
export class PaymentViewComponent implements OnInit {

  id: any;
  idData: any;
  file: File | undefined;

  mysrc: any;
  imagesrc: any;
  url: any;
  base64data: any
  constructor(private _Activatedroute: ActivatedRoute, private paymentService: PaymentServiceService,
    private domSenatizer: DomSanitizer, private router: Router
  ) {

  }





  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params["id"];
    this.paymentService.getByIbId(this.id).subscribe((data: any) => {

      this.idData = data;


      let base64 = this.idData.file;


      this.mysrc = this.domSenatizer.bypassSecurityTrustUrl('data:image/png/jpg;base64,' + base64);

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

    );
  }



  public Reject() {

    this.idData.status = 2;

    this.paymentService.actionDepositRequest(this.idData).subscribe(
      (data) => {

        this.router.navigate(['admin/payment-list']);
        Swal.fire({
          title: "Good job!",
          text: "Payment Rejected  Successfully",
          icon: "success"
        });
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

  public Accept() {

    this.idData.status = 1;

    this.paymentService.actionDepositRequest(this.idData).subscribe(
      (data) => {

        this.router.navigate(['admin/payment-list']);
        Swal.fire({
          title: "Good job!",
          text: "Request Accept  Successfully",
          icon: "success"
        });
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
