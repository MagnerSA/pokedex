import { connect } from 'react-redux';

import { RootState } from '../../../store/reducers/rootReducer';
import { navigateDispatch, PAGES } from '../../../store/actions/navigationActions';

import { DefaultButton } from '../../DefaultButton';

import './styles.css';
import { DefaultLabel } from '../../DefaultLabel';
import { DefaultTextLabel } from '../../DefaultTextLabel';
import { DefaultImage } from '../../DefaultImage';

type Props = {
  navigateDispatch: Function,
};

const HomeContent = (props: Props) => {

  const introText = `Aqui você vai poder saber 
  um pouco mais sobre os seus Pokémon favoritos. E aí, está preparado para conhecer
  centenas de criaturas fantásticas?`;

  return (
    <div className="HomeContent">

      <DefaultLabel className="welcomeLabel">SEJA BEM VINDO</DefaultLabel>

      <DefaultTextLabel className="introText">{introText}</DefaultTextLabel>

      <DefaultButton className="pokedexButton" onClick={
        () => { props.navigateDispatch(PAGES.POKEDEX_PAGE); }
      }>QUERO CONHECÊ-LOS</DefaultButton>

      <img className="image" alt="" src="https://cdn2.bulbagarden.net/upload/c/c7/Spr_Masters_Oak.png"></img>

    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
  navigateDispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);

