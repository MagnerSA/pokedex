import { connect } from 'react-redux';

import { navigateDispatch, PAGES } from '../../../store/actions/navigationActions';
import { RootState } from '../../../store/reducers/rootReducer';

import { DefaultButton } from '../../DefaultButton';
import { DefaultLabel } from '../../DefaultLabel';
import { DefaultTextLabel } from '../../DefaultTextLabel';

import './styles.css';

type Props = {
  navigateDispatch: any;
};

export const AboutContent = (props: Props) => {

  const aboutText = `Esta Pokédex foi desenvolvida por Marcelo Andrade. Estudante do curso de Ciência da Computação
  da Universidade Federal de Campina Grande.`;

  return (
    <div className="AboutContent">

      <DefaultLabel className="aboutLabel">SOBRE O APLICATIVO</DefaultLabel>

      <DefaultTextLabel className="aboutText">{aboutText}</DefaultTextLabel>

      <DefaultButton className="pokedexButton" onClick={() => { props.navigateDispatch(PAGES.POKEDEX_PAGE) }}>VOLTAR AOS POKÉMON</DefaultButton>

      <img className="image" alt="" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ash-Pok%C3%A9mon-PNG-540x1024.png"></img>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({

});


const mapDispatchToProps = {
  navigateDispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContent);
