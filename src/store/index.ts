import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

const configureStore = () => {
  const middlewares = [thunk];
  const composeEnchancers =  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enchancers = composeEnchancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enchancers);

  return store;

}

export default configureStore;