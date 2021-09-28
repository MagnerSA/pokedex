// @flow 
import { connect } from 'react-redux';

import { RootState } from '../../../store/reducers';
import { MenuButton } from '../MenuButton';
import './styles.css';

import * as NavigationActions from '../../../store/actions/navigation'
import { Dispatch } from 'redux';

const Menu = ({ selectedContent, toggleButton }: { selectedContent: number, toggleButton: (selectedContent: number) => {} }) => {
  return (
    <div className="menu">
      <br />
      <MenuButton isActive={selectedContent === 0} onClick={() => { toggleButton(0) }}>HOME</MenuButton>
      <br />
      <MenuButton isActive={selectedContent === 1 || selectedContent === 3} onClick={() => { toggleButton(1) }}>POKÉDEX</MenuButton>
      <br />
      <MenuButton isActive={selectedContent === 2} onClick={() => { toggleButton(2) }}>ABOUT</MenuButton>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedContent: state.navigation.selectedContent
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleButton: (selectedContent: number) => dispatch(NavigationActions.toggleButton({ selectedContent }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);