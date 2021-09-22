// @flow 
import * as React from 'react';
import './styles.css';

type Props = {
  children: string;
  onClick: () => void,
};
export const MenuButton = (props: Props) => {
  return (
    <button className="button" onClick={props.onClick}>{props.children}</button>
  );
};