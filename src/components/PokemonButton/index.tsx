import formatName from '../../util/nameFormatter';
import "./styles.css";

type Props = {
  className?: string;
  onClick: Function;
  pokemon: any;
};
export const PokemonButton = (props: Props) => {
  return (
    <div className="pokemonButton" >
      <button className="pokemonButton" key={props.pokemon.name} onClick={() => { props.onClick() }}>{formatName(props.pokemon.name)}</button>

    </div >
  );
};