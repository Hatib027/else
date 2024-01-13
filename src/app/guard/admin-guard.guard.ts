import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.isLoggedIn() && this.login.getUserRole() == "ADMIN") {

      return true;
    } else if (this.login.isLoggedIn() && this.login.getUserRole() != "ADMIN") {

      Swal.fire(
        'Something Wrong?',
        'Unauthorized Content',
        'question'
      )
      this.router.navigate(['user-dashboard']);

    }

    else {
      this.router.navigate(['login']);
    }
    return false;
  }





}
