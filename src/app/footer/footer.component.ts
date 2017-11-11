import { Component, OnInit, Input } from '@angular/core';
import { GlobalSharedServiceService } from '../services/global-shared-service.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [GlobalSharedServiceService]
})
export class FooterComponent implements OnInit {
  @Input() openMenuBar = false;
  constructor() { }

  ngOnInit() { }

}
