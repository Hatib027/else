import { ChangeDetectorRef, Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bricksfunds-angular';

  constructor(private cdr: ChangeDetectorRef) {


  }

  ngAfterViewInit(): void {


  }

}
