// @flow 
import * as React from 'react';
import { connect } from 'react-redux';
import { navigateDispatch } from '../../../store/actions/navigation';
import { RootState } from '../../../store/reducers';
import { DefaultButton } from '../../buttons/DefaultButton';

import './styles.css';

type Props = {
  navigateDispatch: any;
};

export const AboutContent = (props: Props) => {

  const text = `Esta Pokédex foi desenvolvida por Marcelo Andrade. Estudante do curso de Ciência da Computação
  da Universidade Federal de Campina Grande.`;
  return (
    <div className="AboutContent">
      <div className="about">SOBRE O APLICATIVO</div>
      <div className="textContainer">
        <p className="text">{text}</p>

      </div>
      <div className="pokedexButton">
        <DefaultButton onClick={() => { props.navigateDispatch(1) }}>VOLTAR AOS POKÉMONS</DefaultButton>
      </div>
      <div className="imageContainer">
        <img className="image" alt="" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ash-Pok%C3%A9mon-PNG-540x1024.png" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({

});


const mapDispatchToProps = {
  navigateDispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContent);
