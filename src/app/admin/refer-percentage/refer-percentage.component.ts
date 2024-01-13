import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReferService } from 'src/app/services/refer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-refer-percentage',
  templateUrl: './refer-percentage.component.html',
  styleUrls: ['./refer-percentage.component.css']
})
export class ReferPercentageComponent implements OnInit {

  referPercentage: any = {
    id: '',
    percentage: ''
  };
  constructor(private referService: ReferService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {



    this.referService.getReferPercentage().subscribe(
      (data: any) => {
        this.referPercentage = data;
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


  public addRefer() {
    if (this.referPercentage.percentage == null || this.referPercentage.percentage == 0) {

      this.snack.open("All  fields are required and Greater Than 0 !!", 'Ok', {
        duration: 3000,
      });
    } else if (this.referPercentage.percentage > 100) {

      this.snack.open("All  fields are required and less Than or equal 100 !!", 'Ok', {
        duration: 3000,
      });
    }

    else {
      this.referService.addReferPercentage(this.referPercentage).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Refer Percentage Updated Successfully",
            icon: "success"
          });
          this.router.navigate(['admin']);
        },
        (error) => {

        }
      )
    }
  }
}
