// @flow 
import * as React from 'react';

import './styles.css';

type Props = {
  onClick: any;
  children: any;
};
export const DefaultButton = (props: Props) => {
  return (
    <div className="defaultButton">
      <button onClick={() => { props.onClick(); }}>{props.children}</button>
    </div>

  );
};