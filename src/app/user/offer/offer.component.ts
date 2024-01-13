import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private offerService: OfferService, private _Activatedroute: ActivatedRoute,
    private domSenatizer: DomSanitizer, private router: Router) { }
  images: any = [];
  offers: any = [];
  mysrc: any;
  ngOnInit(): void {
    this.offerService.getOffersUser().subscribe((data) => {
      this.offers = data;
      for (let x = 0; x < this.offers.length; x++) {
        let base64 = this.offers[x].image;
        console.log(base64);
        this.mysrc = this.domSenatizer.bypassSecurityTrustUrl('data:image/png/jpg;base64,' + base64);
        this.offers[x].image = this.mysrc;
      }
      console.log(this.offers)
    }
      , (error) => {
        window.location.reload();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Server Error Or Session Expired",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      })
  }

}
