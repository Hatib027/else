import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login: any;
  role: any;
  ngOnInit(): void {
    this.login = this.loginService.isLoggedIn();
    if (this.login == true) {
      this.loginService.logout();
      window.location.reload();
    }
  }

}