import React, {Component, Fragment} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Header from './component/header';
import Carousel from './component/carousel';
import RecentTrips from './component/recent-trips';
import Driver from './component/driver';
import Stat from './component/stat';

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="main">
        <Carousel/>
        <RecentTrips/>
        <Driver/>
        <Stat/>
      </main>
      <footer className="footer"></footer>
    </Fragment>
  );
}

export default App;
