import { createStore } from 'redux';
import rootReducer from '../reducers/todos';

const persistedState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : {};

const store = createStore(rootReducer,
  persistedState,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()));
});

export default store;
