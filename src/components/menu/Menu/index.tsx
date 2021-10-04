// @flow 
import { connect } from 'react-redux';

import { RootState } from '../../../store/reducers';
import { MenuButton } from '../MenuButton';
import { navigateDispatch } from '../../../store/actions/navigation'
import './styles.css';
import { PokedexLogo } from '../PokedexLogo';

// import * as NavigationActions from '../../../store/actions/navigation'
// import { Dispatch } from 'redux';


type Props = {
  selectedContent: number,
  navigateDispatch: any,
}

const Menu = (props: Props) => {
  return (
    <div className="menu">

      <PokedexLogo className="logo" />
      <br />
      <br />
      <MenuButton isActive={props.selectedContent === 0} onClick={() => { props.navigateDispatch(0) }}>{"INÍCIO"}</MenuButton>
      <br />
      <MenuButton isActive={props.selectedContent === 1 || props.selectedContent === 3} onClick={() => { props.navigateDispatch(1) }}>{"POKÉDEX"}</MenuButton>
      <br />
      <MenuButton isActive={props.selectedContent === 2} onClick={() => { props.navigateDispatch(2) }}>{"SOBRE"}</MenuButton>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedContent: state.navigation.selectedContent
});

const mapDispatchToProps = {
  navigateDispatch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);