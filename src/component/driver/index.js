import React, { Component } from "react";
import "./index.scss";
import { Button, Icon } from "antd";

class driver extends Component {
  render() {
    return (
      <section className="driver">
        <div className="container">
          <div className="driver-item looking-for hvr-hang wow zoomIn" data-wow-duration="1s">
            <Icon type="car" className="item item-icon" />
            <h1 className="item item-title">LOOKING FOR A CAR ?</h1>
            <p className="item item-content">
              Our cars are delivered fully-registered with all requirements
              completed. We’ll deliver your car wherever you are.
            </p>
            <Button type="primary" className="item item-btn">
              INVENTORY
            </Button>
          </div>
          <div className="driver-item be-driver hvr-hang wow zoomIn" data-wow-duration="1s" data-wow-delay="0.3s">
            <Icon type="dollar" className="item item-icon" />
            <h1 className="item item-title">WANT TO BE A DRIVER ?</h1>
            <p className="item item-content">
              Receive the absolute best value for your trade-in vehicle. We even
              handle all paperwork. Schedule your appointment
            </p>
            <Button type="primary" className="item item-btn">
              BE DRIVER
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
export default driver;
