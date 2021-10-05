import { connect } from 'react-redux';

import { RootState } from '../../../store/reducers/rootReducer';
import { navigateDispatch, PAGES } from '../../../store/actions/navigationActions'

import { MenuButton } from '../MenuButton';
import { PokedexLogo } from '../PokedexLogo';

import './styles.css';

type Props = {
  selectedContent: number,
  navigateDispatch: Function,
}

const Menu = (props: Props) => {

  var isHomeButtonActive = props.selectedContent === PAGES.HOME_PAGE;
  var isPokedexButtonActive = props.selectedContent === PAGES.POKEDEX_PAGE || props.selectedContent === PAGES.POKEMON_PAGE;
  var isAboutButtonActive = props.selectedContent === PAGES.ABOUT_PAGE;

  return (
    <div className="Menu">

      <PokedexLogo className="logo" />

      <MenuButton className="homeButton" isActive={isHomeButtonActive} onClick={() => {
        props.navigateDispatch(PAGES.HOME_PAGE);
      }}>{"INÍCIO"}</MenuButton>

      <MenuButton className = "pokedexButton" isActive={isPokedexButtonActive} onClick={() => {
        props.navigateDispatch(PAGES.POKEDEX_PAGE);
      }}>{"POKÉDEX"}</MenuButton>

      <MenuButton className="aboutButton" isActive={isAboutButtonActive} onClick={() => {
        props.navigateDispatch(PAGES.ABOUT_PAGE);
      }}>{"SOBRE"}</MenuButton>

    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedContent: state.navigationReducer.selectedContent
});

const mapDispatchToProps = {
  navigateDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);