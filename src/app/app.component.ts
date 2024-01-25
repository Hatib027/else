import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bricksfunds';
  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    })

    document.onkeydown = (e) => {

      if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
      }
    };
  }



}