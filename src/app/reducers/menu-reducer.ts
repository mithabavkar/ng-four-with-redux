import * as layout from '../actions/menu-action';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case layout.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;


// import * as menu from '../actions/menu-action';

// export interface IMenuState { 
//     /* The description of the different parts of the layout go here */
//     openedModalName:string;
// } 

// const initialState: IMenuState = {
//      /* The initial values of the layout state will be initialized here */
//      openedModalName: null 
// }; 

// /* The reducer of the layout state. Each time an action for the layout is dispatched, 
// it will create a new state for the layout. */ 

// export function reducer(state = initialState, action: menu.LayoutActions): IMenuState { 
//     switch (action.type) { 
//         case menu.LayoutActionTypes.OPEN_MODAL: {
//              const name = action.payload; 
//              return Object.assign({}, state, { openedModalName:name }); 
//             }
//         case menu.LayoutActionTypes.CLOSE_MODAL: {
//              return Object.assign({}, state, { openedModalName:null }); 
//             }
//         default: return state; 
//     }
//  }

// export const getOpenedModalName = (state:IMenuState) => state.openedModalName;