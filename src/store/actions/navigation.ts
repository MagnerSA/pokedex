import { Dispatch } from "redux";


export const navigateDispatch = (selectedContent: number) => (dispatch: Dispatch) => {

  dispatch(navigate(selectedContent));

}

const navigate = (selectedContent: number) => {
  return ({
    type: 'TOGGLE_BUTTON',
    selectedContent,
  });
}