// @flow 
import * as React from 'react';
import { Teste } from '../Teste/Teste';
import './Content.css';
type Props = {

};
export const Content = (props: Props) => {
  var foo = [];

  let N = 5;

  for (var i = 1; i <= N; i++) {
    foo.push(i);
  }

  return (
    <div className="content">
      {
        foo.map(
          (i) => {

            return (
              <Teste key={i} id={i} />
              // <CardRefeicao key={r.id} refeicao={r} deletar={() => { deletar(r.id); console.log("UE"); }}></CardRefeicao>
            )
          })
      }
    </div>
  );
};

