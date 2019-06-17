import React, { Component } from "react";
import "./index.scss";
import { Button } from "antd";
import Marquee from 'react-marquee';

class advertising extends Component {
  render() {
    return (
      <section className="advertising">
        <div className="container">
          <img src="./img/img_gift.png" className="ad-img item" />
          <div className="ad-content-box item">
            <h3 className="box-title">
              Complete the Trips to receive the Deals for the next trips
            </h3>
            <p className="box-content">
              Huray! Click FINISH and leave your reviews about your trips to
              receive point for next trips.
            </p>
            
          </div>
          <Button className="ad-btn item">Login Now !</Button>
        </div>
      </section>
    );
  }
}
export default advertising;
