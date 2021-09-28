import { Provider } from 'react-redux';
import Content from './components/content/Content';
import Menu from './components/menu/Menu';
import configureStore from './store';

// import { Content } from './components/content/Content';
// import { Menu } from './components/menu/Menu/index';


import './styles.css';

const store = configureStore();


function App() {

  // const [selectedContent, setSelectedContent] = useState(0);

  // function selectHomeContent() {
  //   setSelectedContent(0);
  // }

  // function selectPokedexContent() {
  //   setSelectedContent(1);
  // }

  // function selectAboutContent() {
  //   setSelectedContent(2);
  // }

  // function selectPokemonContent() {
  //   setSelectedContent(3);
  // }

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
    <div className="App">
      <Provider store={store}>
        <Menu />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
