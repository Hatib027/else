import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-pass',
  templateUrl: './verify-pass.component.html',
  styleUrls: ['./verify-pass.component.css']
})
export class VerifyPassComponent implements OnInit {

  password: any;
  user: any;
  token: any;
  pass: any;
  constructor(private activatedRoute: ActivatedRoute, private userService: RegisterServiceService, private router: Router, private snack: MatSnackBar) { }


  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.params["id"];


  }

  public changePassword() {

    if (this.password.trim() == '' || this.password == null) {

      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
    } else if (this.pass != this.password) {

      this.snack.open("Both Password Not Match!!", 'Ok', {
        duration: 3000,
      });
    }

    else {

      this.userService.changePassword(this.password, this.token).subscribe(
        (data: any) => {
          this.router.navigate(['/login']);

        },
        (error: any) => {

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Token Is Expired Please Re Verify",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      )
    }

  }
}
