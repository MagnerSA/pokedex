// @flow 
import * as React from 'react';
import { AboutContent } from '../AboutContent';
import HomeContent from '../HomeContent';
import PokedexContent from '../PokédexContent';
import { PokemonContent } from '../PokémonContent';
import './styles.css';
import { connect } from 'react-redux';
import { RootState } from '../../../store/reducers';

const Content = ({ selectedContent }: { selectedContent: number }) => {

  var content = (
    <div></div>
  )

  switch (selectedContent) {
    case 0:
      return (
        <HomeContent />
      )

    case 1:
      return (
        <PokedexContent />
      )

    case 2:
      return (
        <AboutContent />
      )

    case 3:
      return (
        <PokemonContent />
      )

  }

  return (
    content
  );


};

const mapStateToProps = (state: RootState) => ({
  selectedContent: state.navigation.selectedContent
});

export default connect(mapStateToProps)(Content);


