import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ReferService } from 'src/app/services/refer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-refer-earning-history',
  templateUrl: './refer-earning-history.component.html',
  styleUrls: ['./refer-earning-history.component.css']
})
export class ReferEarningHistoryComponent implements OnInit {

  referMaster: any = [{

    id: '',
    userRefer: {
      id: '',
      firstName: '',
    },
    friendRefer: {
      id: '',
      firstName: ''
    },
    amount: '',
    date: ''
  }]
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20];
  constructor(private referService: ReferService, private loginService: LoginService) { }


  ngOnInit(): void {



    this.referService.earningFromRefer().subscribe(
      (data) => {
        this.referMaster = data;


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
    )




  }
  onTableDataChange(event: any) {
    this.page = event;
    this.referMaster;
  }
  onTableSizeChnange(event: any): void {
    this.tableSize = event.targetvalue;
    this.page = 1;
    this.referMaster;
  }

}
