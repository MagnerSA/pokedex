import React from 'react';


import { Content } from './components/content/content/Content';



function App() {


 
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
    <>
      <Content />
    </>

  );
}

export default App;
