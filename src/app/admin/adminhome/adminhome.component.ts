import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminGlobalService } from 'src/app/services/admin-global.service';
import baseUrl from 'src/app/services/helper';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private adminGlobalService: AdminGlobalService, private sanitizer: DomSanitizer) { }

  data: any;

  ngOnInit(): void {
    this.adminGlobalService.getAdminHomeData().subscribe(
      (data: any) => {

        this.data = data;
      },
      (error: any) => {

        window.location.reload();

      }
    )
  }





}
