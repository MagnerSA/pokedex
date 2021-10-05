import { AnyAction } from 'redux';
import { NAVIGATE } from '../actions/navigationActions';

const INITIAL_STATE = {
  selectedContent: 0,
};

const navigationReducer = (state = INITIAL_STATE, action: AnyAction) => {
  
  if (action.type === NAVIGATE) {
    return { ...state, selectedContent: action.selectedContent }
  }
  return state;
}

export default navigationReducer;
