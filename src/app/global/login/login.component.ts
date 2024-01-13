import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = {
    username: "",
    password: ""
  }
  token: any;
  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginDetails.username = '';
  }
  loginSubmit() {

    if (this.loginDetails.username.trim() == '' || this.loginDetails.username == '') {

      this.snackBar.open("username is required !!", '', {
        duration: 5000

      });

      return;
    }

    if (this.loginDetails.password.trim() == '' || this.loginDetails.password == '') {

      this.snackBar.open("password is required !!", '', {
        duration: 5000
      });

      return;
    }

    this.loginService.generateToken(this.loginDetails).subscribe(

      (data: any) => {

        this.loginService.loginUser(data.token);


        this.loginService.getCurrentEmployee().subscribe(
          (data) => {

            this.loginService.setUser(data);
            this.loginService.loginStatus.next(true);


            if (this.loginService.getUserRole() == 'ADMIN') {

              // window.location.href = '/admin';
              window.location.href = '/admin';
              this.loginService.loginStatus.next(true);
              //admin dashboard
            } else if (this.loginService.getUserRole() == 'NORMAL') {

              // window.location.href = '/user-dashboard'
              window.location.href = '/';
              this.loginService.loginStatus.next(true);
              //normal user dash board

            } else {
              this.loginService.logout();

            }
          },
          (error: any) => {


          }
        )


      },
      (error: any) => {

        console.log(error);
        this.snackBar.open("Invalid Detail !! Try Again", '', {
          duration: 3000
        });

      }


    )

  }


}
