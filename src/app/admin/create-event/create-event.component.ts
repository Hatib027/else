import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event = {
    events: '',
    description: '',
    locations: '',
    eventDate: ''
  }

  constructor(private snack: MatSnackBar, private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }
  eventSubmit() {
    this.event.eventDate = this.dateConvert(this.event.eventDate);
    if (
      this.event.events == '' || this.event.events == null ||
      this.event.description == '' || this.event.description == null ||
      this.event.locations == '' || this.event.locations == null ||
      this.event.eventDate == '' || this.event.eventDate == null

    ) {
      console.log(this.event);
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    } else {
      this.eventService.createEvent(this.event)
        .subscribe((data) => {
          Swal.fire({
            title: "Good job!",
            text: "Offer Added Successfully",
            icon: "success"
          });

          this.router.navigate(['/admin/offer-list']);
        }, (error) => {
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


  public dateConvert(str: any) {

    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");

  }
}
