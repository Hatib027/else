import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  email: any;
  constructor(private userService: RegisterServiceService, private matSnackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sendMail() {

    if (this.email.trim() == '' || this.email == null) {
      this.matSnackbar.open("Email field are required !!", 'Ok', {
        duration: 3000,
      });
    } else {

      this.userService.verifyEmail(this.email).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Mail Sent Successfully",
            icon: "success"
          });
        },
        (erro: any) => {

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email not found !!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      )
    }

  }

}
