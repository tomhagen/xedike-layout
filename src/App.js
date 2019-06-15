import React, {Component, Fragment} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Header from './component/header';
import Carousel from './component/carousel';

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="main">
        <Carousel/>
      </main>
      <footer className="footer"></footer>
    </Fragment>
  );
}

export default App;
