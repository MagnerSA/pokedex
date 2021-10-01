// @flow 
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updatePokedexFilter } from '../../../store/actions/pokedex';
import { loadPokemonsAsync } from '../../../store/actions/pokemonsThunk';
import { RootState } from '../../../store/reducers';
import * as PokedexActions from '../../../store/actions/pokedex'

import './styles.css';

type Props = {
  loading: boolean,
  errorMessage: string,
  pokemons: any,
  pokedexFilter: string,
  loadPokemonsAsync: any,
  updatePokedexFilter: any,
}

// const PokedexContent = ({ loading, errorMessage, pokemons, loadPokemonsAsync, updatePokedexFilter, }: { loading: boolean, errorMessage: string, pokemons: any, loadPokemonsAsync: any, updatePokedexFilter: any }) => {
const PokedexContent = (props: Props) => {

  function handleChange() {
    var input = (document.getElementById('filter') as HTMLInputElement).value;

    updatePokedexFilter({ newFilter: input });
  }

  React.useEffect(() => {
    loadPokemonsAsync();
  }, []);

  return (
    <div className="pokedexContent">
      <h1>TESTE</h1>
      <input type='text' id='filter' onChange={() => { handleChange(); }}></input>
      {props.loading && <h3>CARREGANDO</h3>}
      {props.errorMessage && <h3>ERRO</h3>}
      {props.pokemons && props.pokemons.map((p: any) => <h3 key={p.name}>{p.name}</h3>)}

    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  errorMessage: state.pokemons.error,
  pokedexFilter: state.pokedexReducer.pokedexFilter,

});


const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadPokemonsAsync,
  updatePokedexFilter: (newFilter: string) => dispatch(PokedexActions.updatePokedexFilter({ newFilter }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContent);