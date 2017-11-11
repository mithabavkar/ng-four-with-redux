import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as layout from '../actions/menu-action';

@Component({
  selector: 'global-home-page',
  templateUrl: './global-home-page.component.html',
  styleUrls: ['./global-home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalHomePageComponent{
  showSidenav$: Observable<boolean>;
  sidebarNavigation : any;
  constructor(private store: Store<fromRoot.State>) { 
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    //this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    setTimeout(() => {
        store.select(fromRoot.getShowSidenav)
            .subscribe(val => 
            this.sidebarNavigation = val
            )
      }, 3000);
  }

  ngOnInit() {
    console.log('this')
  }

  openSidenav() {
    if(this.sidebarNavigation){
      this.store.dispatch(new layout.CloseSidenavAction());
    }else{
      this.store.dispatch(new layout.OpenSidenavAction());
    }
  }

  closeSideNav(){
    this.store.dispatch(new layout.CloseSidenavAction());
  }
}
