import { Component, OnInit } from '@angular/core';
import { GlobalSharedServiceService } from '../services/global-shared-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [GlobalSharedServiceService]
})
export class HomeComponent implements OnInit {
  //private opened: boolean;
  
  constructor(public globalService : GlobalSharedServiceService) {
    //console.log('home ='+this.globalService.opened);
    // globalService.Enabled.subscribe(val => {
    //      this.opened = val; 
    //      console.log(`home: ${this.opened}`); 
    // });
  }

  ngOnInit() {
  }

}
