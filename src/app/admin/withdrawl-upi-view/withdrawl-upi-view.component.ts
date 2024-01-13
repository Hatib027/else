import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdrawl-upi-view',
  templateUrl: './withdrawl-upi-view.component.html',
  styleUrls: ['./withdrawl-upi-view.component.css']
})
export class WithdrawlUpiViewComponent implements OnInit {

  widthrawl: any = {
    id: '',
    userName: '',
    amount: '',
    upiId: '',
    holderName: '',
    status: 0,
    Date: ''
  }
  investmentMaster: any = {
    currentInvestment: 0,
    referralAmount: 0
  };
  totalAmount: any;
  id: any;
  username: any;

  constructor(private _Activatedroute: ActivatedRoute, private loginService: LoginService, private widthrawlService: WithdrawlService, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params["id"];
    this.widthrawlService.getUserRequestUpi(this.id).subscribe(
      (data: any) => {

        this.widthrawl = data;
        this.widthrawlService.getUserInvestByUsername(this.widthrawl.userName).subscribe(
          (data: any) => {
            console.log(data);

            this.investmentMaster = data;
            this.totalAmount = this.investmentMaster.currentInvestment + this.investmentMaster.referralAmount + this.investmentMaster.currentProfit;

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

  public Accept() {
    this.widthrawl.status = 1;
    if (this.widthrawl.amount > this.totalAmount) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficent Balance Of User Please reject Request",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    } else {

      this.widthrawlService.actionWithdrawlRequestUpi(this.widthrawl).subscribe(
        (data) => {

          this.router.navigate(['admin/withdrawl-list']);
          Swal.fire({
            title: "Good job!",
            text: "Withdrawl Accepted  Successfully",
            icon: "success"
          });
        },
        (error: any) => {

        }
      )
    }
  }



  public Reject() {
    this.widthrawl.status = 2;


    this.widthrawlService.actionWithdrawlRequestUpi(this.widthrawl).subscribe(
      (data) => {

        this.router.navigate(['admin/withdrawl-list']);
        Swal.fire({
          title: "Good job!",
          text: "Withdrawl Rejected  Successfully",
          icon: "success"
        });
      },
      (error: any) => {

      }
    )

  }
}
