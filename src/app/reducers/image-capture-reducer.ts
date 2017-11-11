import * as camera from '../actions/image-capture-action';

export interface State {
  captureCameraPicture: string;
}

const initialState: State = {
  captureCameraPicture: null,
};

export function reducer(state = initialState, action: camera.Actions): State {
  switch (action.type) {
    case camera.CAPTURE_PICTURES:
  return Object.assign({},state,{'captureCameraPicture' : action.payload});
    default:
      return state;
  }
}

export const getImageCaptureReducer = (state: State) => state.captureCameraPicture;