import React, { Component, Fragment } from "react";
import "./index.scss";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

class RecentTrips extends Component {
  render() {
    return (
      <Fragment>
        <section className="recent-trips">
          <div className="container">
            <div className="box-title">
              <h2 className="recent-trips-title">
                RECENT <span>TRIPS</span>
              </h2>
              <p className="recent-trips-subtitle">
                Curabitur tellus leo, euismod sit amet gravida at, egestas sed
                commodo.
              </p>
              <div />
            </div>
            <div className="box-trips-card ">
              <Card
                className="card-item"
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đà Nẵng <Icon type="double-right" /> Huế
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">100,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>0/4</span>
                  </div>
                  <div className="footer-item">
                    <Icon type="wifi" />
                  </div>
                  <div className="footer-item">
                    <Icon type="clock-circle" />
                  </div>
                  <div className="footer-item">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item "
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đà Nẵng <Icon type="double-right" /> Huế
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">100,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>0/4</span>
                  </div>
                  <div className="footer-item">
                    <Icon type="wifi" />
                  </div>
                  <div className="footer-item">
                    <Icon type="clock-circle" />
                  </div>
                  <div className="footer-item">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item"
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đà Nẵng <Icon type="double-right" /> Huế
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">100,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>0/4</span>
                  </div>
                  <div className="footer-item">
                    <Icon type="wifi" />
                  </div>
                  <div className="footer-item">
                    <Icon type="clock-circle" />
                  </div>
                  <div className="footer-item">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item"
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đà Nẵng <Icon type="double-right" /> Huế
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">100,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>0/4</span>
                  </div>
                  <div className="footer-item">
                    <Icon type="wifi" />
                  </div>
                  <div className="footer-item">
                    <Icon type="clock-circle" />
                  </div>
                  <div className="footer-item">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item"
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đà Nẵng <Icon type="double-right" /> Huế
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">100,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>0/4</span>
                  </div>
                  <div className="footer-item">
                    <Icon type="wifi" />
                  </div>
                  <div className="footer-item">
                    <Icon type="clock-circle" />
                  </div>
                  <div className="footer-item">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item"
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đà Nẵng <Icon type="double-right" /> Huế
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">100,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>0/4</span>
                  </div>
                  <div className="footer-item">
                    <Icon type="wifi" />
                  </div>
                  <div className="footer-item">
                    <Icon type="clock-circle" />
                  </div>
                  <div className="footer-item">
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                  </div>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default RecentTrips;
