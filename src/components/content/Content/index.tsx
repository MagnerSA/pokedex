import { connect } from 'react-redux';

import { RootState } from '../../../store/reducers/rootReducer';

import AboutContent from '../AboutContent';
import HomeContent from '../HomeContent';
import PokedexContent from '../PokédexContent';
import PokemonContent from '../PokémonContent';

type Props = {
  selectedContent: number;
}

const Content = (props: Props) => {

  var content = (
    <div></div>
  )

  switch (props.selectedContent) {
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
  selectedContent: state.navigationReducer.selectedContent
});

export default connect(mapStateToProps)(Content);


