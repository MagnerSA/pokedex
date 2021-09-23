// @flow 
import * as React from 'react';
import { MenuButton } from '../MenuButton';
import './styles.css';
type Props = {
  selectHomeContent: () => void,
  selectPokedexContent: () => void,
  selectAboutContent: () => void,
  selectedContent: number,
};
export const Menu = (props: Props) => {
  return (
    <div className="menu">
      <br />
      <MenuButton isActive={props.selectedContent === 0} onClick={props.selectHomeContent}>HOME</MenuButton>
      <br />
      <MenuButton isActive={props.selectedContent === 1 || props.selectedContent == 4} onClick={props.selectPokedexContent}>POKÉDEX</MenuButton>
      <br />
      <MenuButton isActive={props.selectedContent === 2} onClick={props.selectAboutContent}>ABOUT</MenuButton>
    </div>
  );
};