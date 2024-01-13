import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  userActivity: any;
  userInactive: Subject<any> = new Subject();

  visible = false;
  isLoggedIn = false;
  employee = null;
  role: any;

  sessionLogin: any;


  constructor(public loginService: LoginService, private router: Router, private bnIdle: BnNgIdleService) {










  }

  token: any;
  active: any = {};
  ngOnInit(): void {

    this.isLoggedIn = this.loginService.isLoggedIn();
    this.employee = this.loginService.getUser();

    this.role = this.loginService.getUserRole();
    this.loginService.loginStatus.asObservable().subscribe((data) => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.employee = this.loginService.getUser();
      this.role = this.loginService.getUserRole();
    });


    this.token = this.loginService.getToken();
    if (this.loginService.isTokenExpired(this.token) == false) {


      this.logOut();
    }


    if (this.isLoggedIn == false) {
      this.logOut()
    }

  }

  public logOut() {
    this.loginService.logout();
    window.location.reload();

  }


  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }




}
