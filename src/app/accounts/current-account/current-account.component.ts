import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.less']
})
export class CurrentAccountComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
