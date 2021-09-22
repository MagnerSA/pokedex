import React, { useState } from 'react';
import { Content } from './components/content/Content';


import { Menu } from './components/menu/Menu/index';

import './styles.css';


function App() {

  const [selectedContent, setSelectedContent] = useState(0);

  function selectHomeContent() {
    console.log(selectedContent);
    setSelectedContent(0);
    console.log(selectedContent);
  }

  function selectPokedexContent() {
    console.log(selectedContent);
    setSelectedContent(1);
    console.log(selectedContent);
  }

  function selectAboutContent() {
    console.log(selectedContent);
    setSelectedContent(2);
    console.log(selectedContent);
  }

  function selectPokemonContent() {
    console.log(selectedContent);
    setSelectedContent(3);
    console.log(selectedContent);
  }

  // const api = setup({
  //   baseURL: "https://pokeapi.co/api/v2/",
  //   cache: {
  //     maxAge: 15 * 60 * 1000
  //   }
  // });

  // api.get('pokemon/1').then((a: AxiosResponse) => { console.log(a.data["species"]) });




  // for (let index = 1; index <= 152; index++) {

  //   // axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`).then((a: AxiosResponse) => { console.log(a.data["species"]) });
  //   // const element = array[index];

  // }

  // axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((a: AxiosResponse) => { console.log(a.data) });

  // console.log('teste');

  return (
    <div>
      <Menu selectHomeContent={selectHomeContent} selectPokedexContent={selectPokedexContent} selectAboutContent={selectAboutContent} />
      <Content selectedContent={selectedContent} selectPokemonContent={selectPokemonContent} />
    </div>
  );
}

export default App;
