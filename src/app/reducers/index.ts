import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromLayout from './menu-reducer';
import * as fromImage from './image-capture-reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  image:  fromImage.State;
  layout: fromLayout.State;
  router: fromRouter.RouterState;
}

const reducers = {
  image: fromImage.reducer,
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Layout Reducers
 */
export const getLayoutState = (state: State) => state.layout;
export const getImage = (state: State)=> state.image;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
export const getImageCapture = createSelector(getImage, fromImage.getImageCaptureReducer);

// /* Import createSelector from reselect to make selection of different parts of the state fast efficient */ 
// import { createSelector } from 'reselect';

// /* Import the store logger to log all the actions to the console */ 
// //import {storeLogger} from "ngrx-store-logger"; 
// /* Import the layout state */ 
// import * as fromLayout from "./menu-reducer";

// import {compose} from "@ngrx/core"; 

// import {combineReducers} from "@ngrx/store";

// export interface AppState { 
//     layout: fromLayout.IMenuState
// }

// export const reducers = {
//     layout: fromLayout.reducer 
// };

// const developmentReducer:Function = compose(combineReducers)(reducers); 

// export function metaReducer(state: any, action: any) { 
//     return developmentReducer(state, action); 
// }

// /** * Layout selectors */ 
// export const getLayoutState = (state: AppState) => state.layout;

// export const getLayoutOpenedModalName = createSelector(getLayoutState , fromLayout.getOpenedModalName);