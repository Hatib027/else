import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events-delete',
  templateUrl: './events-delete.component.html',
  styleUrls: ['./events-delete.component.css']
})
export class EventsDeleteComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService) { }
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
      // console.log(data)
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

  deleteEvent(id: number) {
    // console.log(id);
    this.eventService.deleteEvent(id).subscribe((data) => {
      this.events = this.events.filter((events: any) =>
        events.id != id
      )
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
    );

  }


}