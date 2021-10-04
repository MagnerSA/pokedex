// @flow 
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { DefaultButton } from '../../buttons/DefaultButton';
import { navigateDispatch } from '../../../store/actions/navigation';

import './styles.css';

type Props = {
  navigateDispatch: any,
};


const HomeContent = (props: Props) => {

  const text = `Aqui você vai poder conhecer 
  um pouco mais sobre os seus Pokémons favoritos.\nE aí, está preparado para conhecer
  centenas de criaturas fantásticas?`;

  return (
    <div className="HomeContent">
      <div className="welcome">SEJA BEM VINDO</div>
      <div className="textContainer">
        <p className="text">{text}</p>

      </div>
      <div className="pokedexButton">
        <DefaultButton onClick={() => { props.navigateDispatch(1) }}>QUERO CONHECÊ-LOS</DefaultButton>
      </div>
      <div className="imageContainer">
        <img className="image" alt="" src="https://cdn2.bulbagarden.net/upload/c/c7/Spr_Masters_Oak.png" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({

});


const mapDispatchToProps = {
  navigateDispatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);

