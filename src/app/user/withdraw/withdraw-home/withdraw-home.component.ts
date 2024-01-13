import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdraw-home',
  templateUrl: './withdraw-home.component.html',
  styleUrls: ['./withdraw-home.component.css']
})
export class WithdrawHomeComponent implements OnInit {
  banks: any;
  constructor(private loginService: LoginService, private snack: MatSnackBar,
    private paymentService: PaymentServiceService, private widthrawlService: WithdrawlService, private router: Router) { }

  widthrawl = {
    userName: this.loginService.getUser().username,
    amount: 0,
    upiId: '',
    holderName: '',
    status: 0,
  }
  investmentMaster: any = {
    currentInvestment: 0,
    referralAmount: 0
  };

  mainInvestment: number = 0;
  upiActionAdmin: any;

  widthrawlIb = {
    userName: this.loginService.getUser().username,
    amount: 0,
    bankName: '',
    ifscCode: '',
    accountNumber: '',
    holderName: '',
    status: 0,
  }

  currentStaus: any;
  ngOnInit(): void {

    this.widthrawlService.getUserInvestment().subscribe(
      (data: any) => {

        this.widthrawlService.getUpiActionUser().subscribe(
          (data: any) => {
            this.upiActionAdmin = data;
            this.currentStaus = this.upiActionAdmin.upiAction;
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

        this.investmentMaster = data;




        this.mainInvestment = (this.investmentMaster.currentInvestment + this.investmentMaster.referralAmount + this.investmentMaster.totalIntrest).toFixed(3);


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
    this.paymentService.getBanks().subscribe(
      (data) => {
        this.banks = data;
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

  withdrawlUPI() {
    if (
      this.widthrawl.amount == 0 ||
      this.widthrawl.upiId.trim() == '' || this.widthrawl.upiId == null ||
      this.widthrawl.holderName == '' || this.widthrawl.holderName == null


    ) {
      console.log(this.widthrawl)
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    } else if (this.mainInvestment == null) {
      this.snack.open("Wallet Insufficient Balance!!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.widthrawl.amount > this.mainInvestment) {

      this.snack.open("Amount is Greater Than Wallet Amount !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.widthrawl.amount < 25) {

      this.snack.open("minimum input amount is 25 $ !!", 'Ok', {
        duration: 3000,
      });
    } else {

      this.widthrawlService.onSubmitUpi(this.widthrawl).subscribe((data: any) => {
        Swal.fire({
          title: "Good job!",
          text: "Withdrawl Request Sent Successfully",
          icon: "success"
        });

        this.router.navigate(['withdrawl-details']);
      }, (error) => {
        window.location.reload();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error Or Session Expired",
          footer: '<a href="#">Why do I have this issue?</a>'
        });

      });
    }

  }
  withdrawlIb() {
    if (
      this.widthrawlIb.amount == 0 ||
      this.widthrawlIb.ifscCode.trim() == '' || this.widthrawlIb.ifscCode == null ||
      this.widthrawlIb.accountNumber == '' || this.widthrawlIb.accountNumber == null ||
      this.widthrawlIb.holderName == '' || this.widthrawlIb.holderName == null ||
      this.widthrawlIb.bankName == '' || this.widthrawlIb.bankName == null


    ) {
      console.log(this.widthrawl)
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    }
    else if (this.mainInvestment == null) {
      this.snack.open("Wallet Insufficient Balance!!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.widthrawlIb.amount > this.mainInvestment) {

      this.snack.open("Amount is Greater Than Wallet Amount !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.widthrawlIb.amount < 25) {

      this.snack.open("minimum input amount is 25 $ !!", 'Ok', {
        duration: 3000,
      });
    } else {

      this.widthrawlService.onSubmit(this.widthrawlIb).subscribe((data) => {

        Swal.fire({
          title: "Good job!",
          text: "Withdrawl Request Sent Successfully",
          icon: "success"
        });

        this.router.navigate(['withdrawl-details']);
      }, (error) => {
        window.location.reload();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error Or Session Expired",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
    }

  }

}
