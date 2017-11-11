import { Component, OnInit, Input, HostListener, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as cameraAction from '../actions/image-capture-action';

declare var navigator;
declare var Camera: any;
@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit{
  @Input() openNavBar = false;
  @Input() customerPic: any;

  @ViewChild('p') public popover: NgbPopover;

  constructor(private store: Store<fromRoot.State>) {
    console.log('Hi hh' + this.openNavBar);
    setTimeout(() => {
        store.select(fromRoot.getImageCapture)
            .subscribe(val => 
             this.customerPic = val ? val : false
            )
      }, 100);
  }

  ngOnInit() {
    console.log('Hi side =' + this.openNavBar); 
  }

  public onCapturePic(event){
    console.log('on camera method called = '+ navigator);
    var imageData = 'asdasd';
    navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail.bind(this), { 
			quality: 100,
			allowEdit: true,
			destinationType: Camera.DestinationType.DATA_URL,
        	correctOrientation: true
    	});
  }

  public onChoosePic(event){
    navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail.bind(this), { 
			quality: 100,
			allowEdit: true,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			mediaType: Camera.MediaType.PICTURE,
        	destinationType: Camera.DestinationType.DATA_URL,
        	correctOrientation: true
    	});
  }

  public onSuccess(imageData) {
      console.log('message = '+ imageData);
      this.customerPic ='';
      this.store.dispatch(new cameraAction.captureImageAction("data:image/jpeg;base64,"+imageData));
      //this.customerPic = "data:image/jpeg;base64,"+imageData;
      this.popover.close();
	}

	public onFail(message) {
    console.log('message = '+ message);
    this.popover.close();
	}

}