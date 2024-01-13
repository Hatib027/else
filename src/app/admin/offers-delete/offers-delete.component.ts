import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offers-delete',
  templateUrl: './offers-delete.component.html',
  styleUrls: ['./offers-delete.component.css']
})
export class OffersDeleteComponent implements OnInit {

  offers: any;
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe((data) => {
      this.offers = data
    }
      ,
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
  deleteOffer(id: number) {
    this.offerService.deleteOffer(id).subscribe((data) => {

      this.offers = this.offers.filter((offers: any) =>
        offers.id != id
      )
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