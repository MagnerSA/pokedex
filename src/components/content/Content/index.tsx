// @flow 
import * as React from 'react';
import { AboutContent } from '../AboutContent';
import { HomeContent } from '../HomeContent';
import { PokedexContent } from '../PokédexContent';
import { PokemonContent } from '../PokémonContent';
import './styles.css';

type Props = {
  selectedContent: number,
  selectPokemonContent: () => void,
};

export const Content = (props: Props) => {

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
    // <div className="content"></div>
  );
  // var foo = [];

  // let N = 5;

  // for (var i = 1; i <= N; i++) {
  //   foo.push(i);
  // }

  // return (
  //   <div className="content">
  //     {
  //       foo.map(
  //         (i) => {

  //           return (
  //             <Teste key={i} id={i} />
  //             // <CardRefeicao key={r.id} refeicao={r} deletar={() => { deletar(r.id); console.log("UE"); }}></CardRefeicao>
  //           )
  //         })
  //     }
  //   </div>
  // );
};

