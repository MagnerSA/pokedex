import { Dispatch } from "redux";

export const NAVIGATE = 'NAVIGATE';

export const PAGES = {
  HOME_PAGE: 0,
  POKEDEX_PAGE: 1,
  ABOUT_PAGE: 2,
  POKEMON_PAGE: 3,
};

export const navigateDispatch = (selectedContent: number) => (dispatch: Dispatch) => {

  dispatch(navigate(selectedContent));

}

const navigate = (selectedContent: number) => {
  return ({
    type: NAVIGATE,
    selectedContent,
  });
}