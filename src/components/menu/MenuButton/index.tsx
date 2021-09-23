// @flow 
import * as React from 'react';
import './styles.css';

type Props = {
  children: string;
  onClick: () => void,
  isActive: boolean;
};
export const MenuButton = (props: Props) => {
  return (
    <button className={props.isActive ? "buttonActive" : "button"} onClick={props.onClick}>{props.children}</button>
  );
};