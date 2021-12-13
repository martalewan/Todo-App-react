import React from 'react';
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => (
  <section className="App">
    <Navigation />
    <Main />
    <Footer />
  </section>
);

export default App;
