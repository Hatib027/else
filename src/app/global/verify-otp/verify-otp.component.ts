import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})


export class VerifyOtpComponent implements OnInit {

  username: any;
  otp: any;
  constructor(private registerService: RegisterServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  public verifyOtp() {

    this.username = localStorage.getItem('username');

    this.registerService.verifyOtp(this.otp, this.username).subscribe(
      (data) => {

        localStorage.removeItem("username");
        Swal.fire({
          title: "Good job!",
          text: "Registered Successfully",
          icon: "success"
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        // console.log(error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Otp Is Wrong or Otp is Expired",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )
  }



}
