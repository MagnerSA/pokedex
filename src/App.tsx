import { Provider } from 'react-redux';

import configureStore from './store/store';

import Content from './components/content/Content';
import Menu from './components/menu/Menu';

import './styles.css';

const store = configureStore();

function App() {

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
