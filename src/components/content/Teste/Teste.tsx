// @flow 
import * as React from 'react';
type Props = {
  id: number;
};
export const Teste = (props: Props) => {

  console.log(props.id);

  return (
    <div>
      {props.id}
    </div>
  );
};