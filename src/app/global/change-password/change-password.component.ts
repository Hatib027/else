import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userfulldsjndskslsls: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private userService: RegisterServiceService) { }

  ngOnInit(): void {


  }

}
