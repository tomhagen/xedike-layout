import React, { Component, Fragment } from "react";
import { Button, Input, Drawer, Icon } from "antd";
import "./index.scss";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isChangeLogo: false
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 300) {
      this.setState({
        isChangeLogo: true
      });
    } else {
      this.setState({
        isChangeLogo: false
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <Fragment>
        <header
          className={`header ${this.state.isChangeLogo ? "opacity" : ""}`}
        >
          <div className="container">
            <div className={`header-box ${this.state.isChangeLogo ? "changePadding":""}`}>
              <div className="header-logo">
                <a>
                  <img src="../img/logo_dealer_two.svg" />
                </a>
              </div>
              <div className="main-menu">
                <ul className="main-menu-container">
                  <li className="menu-item">
                    <a className="menu-item-a hvr-underline-from-center">
                      HOME
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-item-a hvr-underline-from-center">
                      YOUR TRIPS
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-item-a hvr-underline-from-center">
                      SERVICES
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-item-a hvr-underline-from-center">
                      SHOP
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-item-a hvr-underline-from-center">
                      CONTACT
                    </a>
                  </li>
                </ul>
                <div className="btn-box">
                  <Button className="login btn-item">LOGIN</Button>
                  <Button className="signup btn-item">SIGN UP</Button>
                </div>
              </div>
              <div className="hamburger-btn">
                <Icon type="menu" onClick={this.showDrawer} />
              </div>
            </div>
          </div>
        </header>
        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          className="drawer"
        >
          <img src="../img/logo_dealer_two.svg" className="drawer-logo" />
          <div className="drawer-overlay" />
          <br />
          <ul className="drawer-menu-container">
            <li className="menu-item">
              <a className="menu-item-a">HOME</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-a">YOUR TRIPS</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-a">SERVICES</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-a">SHOP</a>
            </li>
            <li className="menu-item">
              <a className="menu-item-a">CONTACT</a>
            </li>
          </ul>
          <div className="btn-box">
            <Button className="login btn-item">LOGIN</Button>
            <Button className="signup btn-item">SIGN UP</Button>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}
export default header;
