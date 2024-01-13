import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminbankDetailsService } from 'src/app/services/adminbank-details.service';
import { LoginService } from 'src/app/services/login.service';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  inramount: number = 0;

  minDate = new Date;
  inramount1: number = 0;
  selectedFile!: File;
  selectedFileUpi!: File;
  accountNumber2: any;
  user: any;
  public payment = {
    userName: '',
    amount: 0,
    paymentDate: '',
    bankName: '',
    accountNumber: '',
    iffcCode: '',
    status: '0',
    dateofrequest: '',
    remark: ''


  }
  public upi = {
    userName: '',
    amount: 0,
    remark: '',
    paymentDate: '',
    dateofrequest: '',
    status: '0',
    upiId: ''
  }


  constructor(
    private paymentService: PaymentServiceService, private snack: MatSnackBar, private router: Router
    , private loginService: LoginService, private admiBankDetailsService: AdminbankDetailsService, private sanitizer: DomSanitizer) { }

  banks: any = [{
    id: '',
    bankname: ""
  }];

  public bankAdminDetails: any = {

    accountNumber: '',
    ifscCode: '',
    upiId: '',
    accountHoldername: ''

  }
  mySrc: any;
  ngOnInit(): void {



    this.user = this.loginService.getUser();

    this.payment.userName = this.user.username;
    this.upi.userName = this.user.username;


    this.paymentService.getBanks().subscribe(
      (data) => {
        this.banks = data;
      },
      (error) => {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )

    this.admiBankDetailsService.getBankDetailsAdminUser().subscribe(
      (data) => {


        this.bankAdminDetails = data;
      },
      (error) => {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error",
          footer: '<a href="#">Why do I have this issue?</a>'
        });

      }
    )


  }


  addPaymentofUPI() {
    this.upi.dateofrequest = this.dateConvert(this.upi.dateofrequest);

    if (
      this.upi.amount == 0 ||

      this.upi.remark.trim() == '' || this.upi.remark == null ||
      this.upi.dateofrequest == '' || this.upi.dateofrequest == null

    ) {
      console.log(this.upi)
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    }
    else if (this.selectedFileUpi == null) {

      this.snack.open(" image file  are required !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.inramount1 < 2000) {
      this.snack.open("Amount must be greater than 2000 !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.selectedFileUpi.size > 1000000) {

      this.snack.open("Image Maximum Limit is 1 mb !!", 'Ok', {
        duration: 3000,
      });
    }

    else {
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.upi));
      formData.append('file', this.selectedFileUpi);



      this.paymentService.addPaymentUpi(formData).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Payment Request Sent Successfully",
            icon: "success"
          });
          this.router.navigate(['payment-home']);
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
      );
    }
  }
  onChangeVal(e: any) {
    this.selectedFile = e.target.files[0];


  }
  onChangeUpi(e: any) {
    this.selectedFileUpi = e.target.files[0];
  }
  public addPayment() {
    this.payment.dateofrequest = this.dateConvert(this.payment.dateofrequest);

    if (this.payment.bankName == '' || this.payment.bankName == null ||
      this.payment.amount == 0 ||
      this.payment.iffcCode.trim() == '' || this.payment.iffcCode == null ||
      this.payment.accountNumber == '' || this.payment.accountNumber == null ||
      this.payment.dateofrequest == '' || this.payment.dateofrequest == null || this.payment.remark.trim() == '' || this.payment.remark == null

    ) {

      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    }
    else if (this.selectedFile == null) {

      this.snack.open(" image file  are required !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.inramount < 2000) {
      this.snack.open("Amount must be greater than 2000 !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.payment.iffcCode.length < 11 || this.payment.iffcCode.length > 11) {

      this.snack.open("Ifsc Code Limit is 11 !!", 'Ok', {
        duration: 3000,
      });
    } else if (this.payment.accountNumber != this.accountNumber2) {

      this.snack.open("Both Account Number Not Match !!", 'Ok', {
        duration: 3000,
      });
    } else if (this.selectedFile.size > 1000000) {

      this.snack.open("Image Maximum Limit is 1 mb !!", 'Ok', {
        duration: 3000,
      });
    }
    else {


      const formData = new FormData();
      formData.append('data', JSON.stringify(this.payment));
      formData.append('file', this.selectedFile);


      this.paymentService.addProduct(formData).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Payment Request Sent Successfully",
            icon: "success"
          });

          this.router.navigate(['payment-home']);
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
      );

    }
  }

  changeToDollar() {
    console.log("ss");

    this.payment.amount = this.inramount / 80;
  }
  changeToDollarUPI() {
    this.upi.amount = this.inramount1 / 80;

  }

  public dateConvert(str: any) {

    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");

  }



}