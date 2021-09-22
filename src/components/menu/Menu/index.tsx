// @flow 
import * as React from 'react';
import { MenuButton } from '../MenuButton';
import './styles.css';
type Props = {
  selectHomeContent: () => void,
  selectPokedexContent: () => void,
  selectAboutContent: () => void,
};
export const Menu = (props: Props) => {
  return (
    <div className="menu">
      <br />
      <MenuButton onClick={props.selectHomeContent}>HOME</MenuButton>
      <br />
      <MenuButton onClick={props.selectPokedexContent}>POKÉDEX</MenuButton>
      <br />
      <MenuButton onClick={props.selectAboutContent}>ABOUT</MenuButton>
    </div>
  );
};