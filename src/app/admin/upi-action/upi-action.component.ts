import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WithdrawlService } from 'src/app/services/withdrawl.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upi-action',
  templateUrl: './upi-action.component.html',
  styleUrls: ['./upi-action.component.css']
})
export class UpiActionComponent implements OnInit {

  currentStatus: any;
  public upiActionAdmin: any = {
    id: '',
    upiAction: ''
  }

  constructor(private withdrawlService: WithdrawlService, private router: Router) { }

  ngOnInit(): void {

    this.withdrawlService.getUpiActionAdmin().subscribe(
      (data: any) => {
        this.upiActionAdmin = data;
        this.currentStatus = this.upiActionAdmin.upiAction;
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

  changeUpiAction() {
    this.withdrawlService.addUpiActionAdmin(this.upiActionAdmin).subscribe(
      (data) => {

        Swal.fire({
          title: "Good job!",
          text: "Upi Action Updated Successfully",
          icon: "success"
        });
        this.router.navigate(['admin']);
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

}
