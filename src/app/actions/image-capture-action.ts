import { Action } from '@ngrx/store';

export const CAPTURE_PICTURES = '[Side-bar] Camera Action';

export class captureImageAction implements Action { 
    type = CAPTURE_PICTURES; 
    constructor(public payload:string) { } 
}

export type Actions = captureImageAction;