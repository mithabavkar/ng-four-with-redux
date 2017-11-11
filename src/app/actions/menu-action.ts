import { Action } from '@ngrx/store';

export const OPEN_SIDENAV =   '[Layout] Open Sidenav';
export const CLOSE_SIDENAV =  '[Layout] Close Sidenav';


export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = CLOSE_SIDENAV;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;


// import {Action} from '@ngrx/store'; 

// /* Layout actions are defined here */
// export const LayoutActionTypes = {
//     OPEN_MODAL: '[global-home-page] Open modal', 
//     CLOSE_MODAL: '[global-home-page] Close modal'
// }; 

// /* Modal actions */ 
// export class OpenModalAction implements Action { 
//     type = LayoutActionTypes.OPEN_MODAL; 
//     constructor(public payload:string) { } 
// }

// export class CloseModalAction implements Action { 
//     type = LayoutActionTypes.CLOSE_MODAL;
//     constructor(public payload:string) { } 
// }

// export type LayoutActions = CloseModalAction | OpenModalAction