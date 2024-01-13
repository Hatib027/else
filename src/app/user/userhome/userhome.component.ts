import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit {

  investmentMaster: any = {
    level: '',
    totalInvestment: '',
    currentInvestment: '',
    totalProfit: ''
  };
  constructor(private withdrawlService: WithdrawlService, public loginService: LoginService) { }

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

  }


}
