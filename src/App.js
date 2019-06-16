import React, {Component, Fragment} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Header from './component/header';
import Carousel from './component/carousel';
import RecentTrips from './component/recent-trips';
import Driver from './component/driver';

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="main">
        <Carousel/>
        <RecentTrips/>
        <Driver/>
      </main>
      <footer className="footer"></footer>
    </Fragment>
  );
}

export default App;
