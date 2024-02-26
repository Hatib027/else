import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdrawl-ib-view',
  templateUrl: './withdrawl-ib-view.component.html',
  styleUrls: ['./withdrawl-ib-view.component.css']
})
export class WithdrawlIbViewComponent implements OnInit {


  widthrawlIb = {
    userName: this.loginService.getUser().username,
    amount: 0,
    bankName: '',
    ifscCode: '',
    accountNumber: '',
    holderName: '',
    date: '',
    status: 0,
  }

  investmentMaster: any = {
    currentInvestment: 0,
    referralAmount: 0
  };

  totalAmount: any;
  id: any;
  username: any;
  constructor(private _Activatedroute: ActivatedRoute, private loginService: LoginService, private widthrawlService: WithdrawlService, private router: Router) { }

  ngOnInit(): void {

    this.id = this._Activatedroute.snapshot.params["id"];
    this.widthrawlService.getUserRequestIb(this.id).subscribe(
      (data: any) => {

        this.widthrawlIb = data;
        this.widthrawlService.getUserInvestByUsername(this.widthrawlIb.userName).subscribe(
          (data: any) => {


            this.investmentMaster = data;
            this.totalAmount = (this.investmentMaster.currentInvestment + this.investmentMaster.referralAmount + this.investmentMaster.currentProfit).toFixed(3);

          },
          (error: any) => {
          }
        );
      },
      (error: any) => {

      }
    );
  }

  public Accept() {
    this.widthrawlIb.status = 1;


    if (this.widthrawlIb.amount > this.totalAmount) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficent Balance Of User Please reject Request",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    } else {

      this.widthrawlService.actionWithdrawlRequestIb(this.widthrawlIb).subscribe(
        (data) => {

          this.router.navigate(['admin/withdrawl-list']);
          Swal.fire({
            title: "Good job!",
            text: "Withdrawl Accepted  Successfully",
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

  public Reject() {
    this.widthrawlIb.status = 2;


    this.widthrawlService.actionWithdrawlRequestIb(this.widthrawlIb).subscribe(
      (data) => {

        this.router.navigate(['admin/withdrawl-list']);
        Swal.fire({
          title: "Good job!",
          text: "Withdrawl Rejected  Successfully",
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
