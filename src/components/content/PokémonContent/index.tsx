// @flow 
import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { loadPokemonDataAsync } from '../../../store/actions/pokemonPageThunk';

import './styles.css';

type Props = {
  currentPokemonName: string,
  loadPokemonDataAsync: any,
  pokemonData: any,
  loading: boolean,
  errorMessage: string,
};

const PokemonContent = (props: Props) => {

  React.useEffect(() => {
    props.loadPokemonDataAsync(props.currentPokemonName);
  }, []);

  return (
    <div className="PokemonContent">
      <button onClick={() => { console.log(props.pokemonData) }}>AFEFEFE</button>
      {props.pokemonData && <h2>{props.pokemonData.name}</h2>}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentPokemonName: state.pokemonPageReducer.currentPokemonName,
  pokemonData: state.pokemonPageReducer.pokemonData,
  loading: state.pokemonPageReducer.loading,
  errorMessage: state.pokemonPageReducer.error,
});


const mapDispatchToProps = {
  loadPokemonDataAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContent);