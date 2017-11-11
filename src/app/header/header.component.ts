import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import {Store} from "@ngrx/store"; 
import {Observable} from "rxjs";
import { Subscription } from 'rxjs/Subscription';

// import * as fromRoot from '../reducers/index';
// import * as menu from '../actions/menu-action';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Output() openMenu = new EventEmitter();
   @Input() openMenuBar = false;
  constructor() { }

  ngOnInit() {
    
  }
}
