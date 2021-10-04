// @flow 
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadPokemonsAsync } from '../../../store/actions/pokemonsThunk';
import { updatePokemonFilterDispatch } from '../../../store/actions/pokedex';
import { navigateDispatch } from '../../../store/actions/navigation'
import { selectCurrentPokemonDispatch, clearPokemonDataDispatch } from '../../../store/actions/pokemonPageActions'

import { RootState } from '../../../store/reducers';
import * as PokedexActions from '../../../store/actions/pokedex'

import './styles.css';
import formatName from '../../../util/nameFormatter';

type Props = {
  loading: boolean,
  errorMessage: string,
  pokemons: any,
  pokedexFilter: string,
  loadPokemonsAsync: any,
  updatePokemonFilterDispatch: any,
  navigateDispatch: any,
  selectCurrentPokemonDispatch: any,
  clearPokemonDataDispatch: any,
}

// const PokedexContent = ({ loading, errorMessage, pokemons, loadPokemonsAsync, updatePokedexFilter, }: { loading: boolean, errorMessage: string, pokemons: any, loadPokemonsAsync: any, updatePokedexFilter: any }) => {
const PokedexContent = (props: Props) => {

  function handleChange() {
    var input = (document.getElementById('filter') as HTMLInputElement).value;

    props.updatePokemonFilterDispatch(input);
  }

  React.useEffect(() => {
    props.loadPokemonsAsync();
  }, []);

  return (
    <div className="PokedexContent">
      <div className='textFieldContainer'>
        <input className='textField' type='text' id='filter' autoComplete='off' placeholder="DIGITE O NOME DO POKÉMON" onChange={() => { handleChange(); }}></input>
      </div>
      {/* {props.loading && <h3>CARREGANDO</h3>}
      {props.errorMessage && <h3>ERRO</h3>} */}
      <div className="listContainer">
        {props.pokemons && props.pokemons.map((p: any) => {
          if (p.name.toLowerCase().includes(props.pokedexFilter)) {
            return (
              <button key={p.name} onClick={() => {

                props.clearPokemonDataDispatch();

                props.updatePokemonFilterDispatch('');

                props.selectCurrentPokemonDispatch(p.name);

                props.navigateDispatch(3);
              }}>{formatName(p.name)}</button>
            )
          }
          return <></>;
        })}
      </div>


    </div >
  );
};

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  errorMessage: state.pokemons.error,
  pokedexFilter: state.pokedexReducer.pokedexFilter,

});


const mapDispatchToProps = {
  clearPokemonDataDispatch,
  loadPokemonsAsync,
  updatePokemonFilterDispatch,
  navigateDispatch,
  selectCurrentPokemonDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContent);