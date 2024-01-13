import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getUserEvents().subscribe((data) => {
      this.events = data;
    },
      (error: any) => {
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
