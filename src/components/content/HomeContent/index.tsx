// @flow 
import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import { loadPokemonsAsync } from '../../../store/actions/pokemonsThunk';
import { RootState } from '../../../store/reducers';
import './styles.css';




const HomeContent = ({ loading, errorMessage, pokemons, loadPokemonsAsync }: { loading: boolean, errorMessage: string, pokemons: any, loadPokemonsAsync: any }) => {

  // const dispatch = useDispatch();


  React.useEffect(() => {
    loadPokemonsAsync();
  }, []);
  // console.log("POKEMONS:")
  // console.log(pokemons);
  // console.log("CARREGANDO:")
  // console.log(loading);
  // console.log("ERRO:")
  // console.log(errorMessage);

  return (
    <div>
      <h1>TESTE</h1>
      {loading && <h3>CARREGANDO</h3>}
      {errorMessage && <h3>ERRO</h3>}
      {pokemons && pokemons.map((p: any) => <h3 key={p.name}>{p.name}</h3>)}

      {/* {pokemons && pokemons.map((p:any) => <h5 key={p.id}>{p}</h5>)} */}
    </div>
  );




};

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemons.pokemons,
  loading: state.pokemons.loading,
  errorMessage: state.pokemons.error
});


const mapDispatchToProps = {
  loadPokemonsAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);


  // props.loadPokemons();

  // if (this.props.loading) {
  //   console.log("CARREGANDO")
  // }

  // return (
  //   // console.log(this.props.data);

  //   <div className="homeContent">
  //     <button onClick={() => {
  //       console.log("TESTE");
  //       loadPokemons();
  //       console.log(this.props);

  //     }}>A</button>
  //   </div>
  // );