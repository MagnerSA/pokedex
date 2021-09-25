import { AnyAction } from 'redux';

const INITIAL_STATE = {
  selectedContent: 0,
};

export default function navigation(state = INITIAL_STATE, action: AnyAction) {
  if (action.type === 'TOGGLE_BUTTON') {
    return { ...state, selectedContent: action.selectedContent }
  }
  return state;
}
