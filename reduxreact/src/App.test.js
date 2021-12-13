import React from 'react'; 
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import store from './redux/store/store';

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div
  );

  // ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Snapshot', () => {
  const { asFragment } = render(<Navigation />)
  expect(asFragment()).toMatchSnapshot();
});

test('Snapshot', () => {
  const { asFragment } = render(<Footer />)
  expect(asFragment()).toMatchSnapshot();
});

