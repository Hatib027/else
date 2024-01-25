import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public employee = {
    username: '',
    password: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    referralcode: ''
  }


  constructor(private registerService: RegisterServiceService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }
  // emial ki length badha de ke min 

  hide = true;
  public addUser() {

    if (this.employee.username == '' || this.employee.username == null || this.employee.password.trim() == '' || this.employee.password == null || this.employee.email.trim() == '' || this.employee.email == null || this.employee.firstName.trim() == '' || this.employee.firstName == null || this.employee.lastName.trim() == '' || this.employee.lastName == null || this.employee.phone == null || this.employee.referralcode.trim() == '' || this.employee.referralcode == null) {
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    } else if (this.employee.username.trim().length < 5) {

      this.snack.open("Username Must Be Greater than 5 Digit !!", 'Ok', {
        duration: 3000,
      });
      return;
    }
    else if (this.employee.email.length < 9) {
      this.snack.open("Enter Email Correctly !!", 'Ok', {
        duration: 3000,
      });
    }
    else if (this.employee.password.trim().length < 8) {

      this.snack.open("Password Must Be Greater than 8 Digit !!", 'Ok', {
        duration: 3000,
      });
      return;
    }

    else if (this.employee.phone.toString().length != 10) {



      this.snack.open("phone Must Be 10 Digit !!", 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.registerService.addEmployeeOrSendOtp(this.employee).subscribe(
      (data: any) => {




        this.router.navigate(['verify-otp']);

        localStorage.setItem('username', data.username);



      }, (error: any) => {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Mail  Already Used !! or Refferalcode Wrong",
          footer: '<a href="#">Change Username or mail or refferalcode</a>'
        });

      }
    )



  }

}