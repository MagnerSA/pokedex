// @flow 
import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { loadPokemonDataAsync } from '../../../store/actions/pokemonPageThunk';
import { navigateDispatch } from '../../../store/actions/navigation';
import ReactECharts from 'echarts-for-react';
import CSS from 'csstype';

import './styles.css';
import formatName from '../../../util/nameFormatter';
import { DefaultButton } from '../../buttons/DefaultButton';
import { colorMap, baseTheme, backgroundColorMap } from './colorMaps';


type Props = {
  currentPokemonName: string,
  loadPokemonDataAsync: any,
  pokemonData: any,
  loading: boolean,
  errorMessage: string,
  navigateDispatch: any,
};

const PokemonContent = (props: Props) => {

  var hasData = props.pokemonData != null;

  var hp = hasData ? props.pokemonData.stats[0].base_stat : 0;
  var attack = hasData ? props.pokemonData.stats[1].base_stat : 0;
  var defense = hasData ? props.pokemonData.stats[2].base_stat : 0;
  var special_attack = hasData ? props.pokemonData.stats[3].base_stat : 0;
  var special_defense = hasData ? props.pokemonData.stats[4].base_stat : 0;
  var speed = hasData ? props.pokemonData.stats[5].base_stat : 0;

  var numberOfTypes = 2;
  var type1: string = '';
  var type2: string = '';

  if (hasData) numberOfTypes = props.pokemonData.types.length;
  if (hasData) type1 = props.pokemonData.types[0].type.name;
  if (hasData && numberOfTypes === 2) type2 = props.pokemonData.types[1].type.name;

  const baseThemeColor: CSS.Properties = {
    'backgroundColor': hasData ? (baseTheme[type1] === 'light' ? 'white' : '#00000038') : 'light',
  };

  const backgroundColor: CSS.Properties = {
    'backgroundColor': hasData ? backgroundColorMap[type1] : 'white',
  };

  const themeColor: CSS.Properties = {
    'backgroundColor': hasData ? colorMap[type1] : 'white',
  };

  const secondTypeColor: CSS.Properties = {
    'backgroundColor': numberOfTypes === 2 ? colorMap[type2] : 'white',
  };

  var option = {
    legend: null,
    title: {
      text: 'Atributos do Pokémon',
      left: 'center',
      textStyle: {
        color: hasData ? (baseTheme[type1] === 'dark' ? 'white' : 'black') : 'black'

      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
      }
    },
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452'],
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['10rem', '100vw'],
        label: {
          fontSize: '10vw',
          color: hasData ? (baseTheme[type1] === 'dark' ? 'white' : 'black') : 'black'

        },
        labelLine: {
          length: 0,
        },
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 0
        },
        data: [
          { value: hp, name: `HP (${hp})` },
          { value: attack, name: `Attack (${attack})` },
          { value: defense, name: `Defense (${defense})` },
          { value: special_attack, name: `Special Attack (${special_attack})` },
          { value: special_defense, name: `Special Defense (${special_defense})` },
          { value: speed, name: `Speed (${speed})` },
        ]
      }
    ]
  };


  React.useEffect(() => {
    props.loadPokemonDataAsync(props.currentPokemonName);
  }, []);

  return (

    <div className="PokemonContent" style={backgroundColor}>
      <div className="chart" style={baseThemeColor}><ReactECharts option={option} /></div>
      <div className="pokemonName" style={themeColor}>{hasData && formatName(props.pokemonData.name)}</div>
      <div className="pokemonImage" style={baseThemeColor} >{hasData && <img className="image" alt="" src={props.pokemonData.sprites.other["official-artwork"].front_default} />}</div>
      <div className={numberOfTypes === 1 ? "pokemonType" : "pokemonType1"} style={themeColor}>{hasData && formatName(type1)}</div>
      {numberOfTypes === 2 && <div className="pokemonType2" style={secondTypeColor}>{hasData && formatName(type2)}</div>}
      <div className="pokedexButton">
        <DefaultButton onClick={() => { props.navigateDispatch(1) }}>MAIS POKÉMONS</DefaultButton>
      </div>

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
  navigateDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContent);