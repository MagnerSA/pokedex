

export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;

  // hp: number;
  // attack: number;
  // defense: number;
  // specialAttack: number;
  // specialDefense: number;
  // speed: number;

  // type1: string;
  // type2: string;
};

// export function getPokemon(id: number) {

//   let pokemon: Pokemon;

//   api.get('/pokemon/' + id).then(
//     (response: AxiosResponse) => {
//       pokemon = {
//         id: 5,
//         name: response.data.name,
//         imageUrl: "",
//         // imageUrl: "response.data["sprites"]["other"]["official-artwork"].front_default",
//       };

//       return pokemon;
//     }
//   );


  // return pokemon;



  // .then(
  //   (response: AxiosResponse) => {

  //     pokemon = {
  //       id: response.data.id,
  //       name: response.data.name,
  //       imageUrl: response.data["sprites"]["other"]["official-artwork"].front_default,
  //     };

  //     console.log(pokemon);

  //     return pokemon;
  //   }
  // );





// }