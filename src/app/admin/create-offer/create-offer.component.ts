import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  selectedFile!: File;
  offer = {
    offer: '',
    offerDate: '',
  }


  constructor(private offerService: OfferService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  offerSubmit() {
    this.offer.offerDate = this.dateConvert(this.offer.offerDate);
    if (
      this.offer.offer == '' || this.offer.offer == null ||
      this.offer.offerDate == '' || this.offer.offerDate == null

    ) {
      // console.log(this.offer);
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    } else {


      const formData = new FormData();
      formData.append('data', JSON.stringify(this.offer));
      formData.append('file', this.selectedFile);


      // .subscribe( (data) => { console.log(data) },(error)=>{console.log(error)})
      this.offerService.createOffer(formData).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Offer Added Successfully",
            icon: "success"
          });

          this.router.navigate(['/admin/offer-list']);
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
      );
    }
  }
  onChangeVal(e: any) {
    this.selectedFile = e.target.files[0];
  }
  public dateConvert(str: any) {

    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");
  }
}