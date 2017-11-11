import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalSharedServiceService {
  private _sideMenu = new Subject<boolean>(); 
   public username = new BehaviorSubject<boolean>(false); 

  // Observable string streams
  caseNumber$ = this.username.asObservable();

getData(){
  return this.username.asObservable();
}
    // Service message commands
  setData(data: boolean) {
    this.username.next(data);
  }
  //private _sideMenu = new Subject<boolean>();
  //public opened :any;
  //myMethod$: Observable<any>;
  // private myMethodSubject = new Subject<any>();


  // myMethod$ = this.myMethodSubject.asObservable();
  
  // //get Enabled() { return this._sideMenu.asObservable(); }
  
  // // SetEnabled(value: boolean) {
  // //   this._sideMenu.next(value);
  // //   console.log(`service: ${value}`);
  // // }

  //  myMethod(data) {
  //    window['menu']=data;
  //       console.log(data); // I have data! Let's return it so subscribers can use it!
  //       // we can do stuff with data if we want
  //       this.myMethodSubject.next(data);
  //   }

  //   getValue() {
  //       return window['menu'];
  //   }

  // constructor() { 
  // }

}
