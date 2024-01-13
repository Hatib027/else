import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminbankDetailsService } from 'src/app/services/adminbank-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bankdetails-admin',
  templateUrl: './bankdetails-admin.component.html',
  styleUrls: ['./bankdetails-admin.component.css']
})
export class BankdetailsAdminComponent implements OnInit {

  constructor(private adminbankDetailsService: AdminbankDetailsService, private matSnackBar: MatSnackBar, private router: Router) { }

  securityCodeCheck: string = '';

  butAmg: any = 'disabled';

  public bankAdminDetails: any = {

    accountNumber: '',
    ifscCode: '',
    accountHoldername: '',
    upiId: '',
    securityCode: ''

  }

  ngOnInit(): void {
  }

  public getData() {


    this.adminbankDetailsService.getBankDetailsAdmin(this.securityCodeCheck).subscribe(
      (data) => {

        this.bankAdminDetails = data;
        this.butAmg = 'enabled';

        if (this.bankAdminDetails.securityCode == '') {
          this.bankAdminDetails.securityCode = '687218201';
        }


      },
      (error) => {
        window.location.reload();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "SecurityCode Is Wrong",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )



  }
  public changeBankDetails() {
    if (this.bankAdminDetails.accountNumber == null || this.bankAdminDetails.ifscCode.trim() == '' || this.bankAdminDetails.ifscCode == null || this.bankAdminDetails.upiId.trim() == '' || this.bankAdminDetails.upiId == null || this.bankAdminDetails.securityCode == null) {

      this.matSnackBar.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
    } else {
      this.adminbankDetailsService.addBankDetailsAdmin(this.bankAdminDetails).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Bank-Data Updated Successfully",
            icon: "success"
          });
          this.router.navigate(['admin']);
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
}
