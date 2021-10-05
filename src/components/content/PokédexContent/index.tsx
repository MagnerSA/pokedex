// @flow 
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadPokemonsAsync } from '../../../store/actions/pokedexPageThunk';
import { updatePokemonFilterDispatch } from '../../../store/actions/pokedexPageActions';
import { navigateDispatch, PAGES } from '../../../store/actions/navigationActions'
import { selectCurrentPokemonDispatch, clearPokemonDataDispatch } from '../../../store/actions/pokemonPageActions'

import { RootState } from '../../../store/reducers/rootReducer';
import * as PokedexActions from '../../../store/actions/pokedexPageActions'

import './styles.css';
import formatName from '../../../util/nameFormatter';
import { DefaultTextField } from '../../DefaultTextField';
import { PokemonButton } from '../../PokemonButton';

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

  function navigateToPokemonPage(pokemon: any) {

    props.clearPokemonDataDispatch();

    props.updatePokemonFilterDispatch('');

    props.selectCurrentPokemonDispatch(pokemon.name);

    props.navigateDispatch(PAGES.POKEMON_PAGE);

  }

  React.useEffect(() => {
    props.loadPokemonsAsync();
  }, []);

  return (
    <div className="PokedexContent">

      <div className='textFieldContainer'>
        <DefaultTextField className='textField' type='text' id='filter' autoComplete='off' placeholder="DIGITE O NOME DO POKÉMON" onChange={() => { handleChange(); }}></DefaultTextField>
      </div>

      <div className="listContainer">
        {props.pokemons && props.pokemons.map((pokemon: any) => {

          const searchFilter: boolean = pokemon.name.toLowerCase().includes(props.pokedexFilter.toLowerCase());

          if (searchFilter) {
            return (
              <PokemonButton key={pokemon.name} pokemon={pokemon} onClick={() => { navigateToPokemonPage(pokemon); }} />
            )
          }
          return <></>;
        })}
      </div>

    </div >
  );
};

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokedexReducer.pokemons,
  loading: state.pokedexReducer.loading,
  errorMessage: state.pokedexReducer.error,
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