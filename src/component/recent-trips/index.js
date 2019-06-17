import React, { Component, Fragment } from "react";
import "./index.scss";
import { Card, Icon, Avatar, Popover } from "antd";

const { Meta } = Card;

class RecentTrips extends Component {
  render() {
    return (
      <Fragment>
        <section className="marquee-box">
          <div className="container">
            <div className="marquee">
              <div className="marquee-content">
                <Icon type="caret-left" className="item-icon" />
                <h4 className="item-name">&nbsp;Alex &nbsp; </h4>
                <span className="item-message">
                  just finish his trip &nbsp;
                </span>
                <span className="item-time">1 minutes ago</span>
              </div>
              <div className="marquee-content">
                <Icon type="check-circle" className="item-icon" />
                <h4 className="item-name">&nbsp;Caroline &nbsp; </h4>
                <span className="item-message">has become driver &nbsp;</span>
                <span className="item-time">2 minutes ago</span>
              </div>
              <div className="marquee-content">
                <Icon type="contacts" className="item-icon" />
                <h4 className="item-name">&nbsp;Josh &nbsp; </h4>
                <span className="item-message">
                  just book a Fortuner &nbsp;
                </span>
                <span className="item-time">1 minutes ago</span>
              </div>
              <div className="marquee-content">
                <Icon type="star" className="item-icon" />
                <h4 className="item-name">&nbsp;Lincol &nbsp; </h4>
                <span className="item-message">got a deals &nbsp;</span>
                <span className="item-time">5 minutes ago</span>
              </div>
              <div className="marquee-content">
                <Icon type="safety" className="item-icon" />
                <h4 className="item-name">&nbsp;Rosy &nbsp; </h4>
                <span className="item-message">just arrive safety &nbsp;</span>
                <span className="item-time">2 minutes ago</span>
              </div>
              <div className="marquee-content">
                <Icon type="contacts" className="item-icon" />
                <h4 className="item-name">&nbsp;Lindan &nbsp; </h4>
                <span className="item-message">
                  just book a Ford Everest &nbsp;
                </span>
                <span className="item-time">10 minutes ago</span>
              </div>
              <div className="marquee-content">
                <Icon type="contacts" className="item-icon" />
                <h4 className="item-name">&nbsp;Josh &nbsp; </h4>
                <span className="item-message">
                  just become a member of Xedike &nbsp;
                </span>
                <span className="item-time">1 minutes ago</span>
              </div>
            </div>
          </div>
        </section>
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
                className="card-item wow fadeIn "
                data-wow-delay="0.2s"
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
                  <Popover content={"Currently has 0 person in car"}>
                    <div className="footer-item">
                      <Icon type="user" />
                      <span>0/4</span>
                    </div>
                  </Popover>
                  <Popover content={"This car has wifi"}>
                    <div className="footer-item">
                      <Icon type="wifi" />
                    </div>
                  </Popover>
                  <Popover content={"Arrive one time"}>
                    <div className="footer-item">
                      <Icon type="clock-circle" />
                    </div>
                  </Popover>
                  <Popover content={"Rate 4 on 5 star"}>
                    <div className="footer-item">
                      <Icon type="star" />
                      <Icon type="star" />
                      <Icon type="star" />
                      <Icon type="star" />
                    </div>
                  </Popover>
                </div>
                <div className="card-overlay">
                  <h2>
                    NEW 2017 <br /> CHEVROLET MALIBU
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item wow fadeIn"
                data-wow-delay="0.3s"
                cover={<img alt="example" src="./img/trip-2.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Bình Định <Icon type="double-right" /> Đà Nẵng
                    </p>
                    <p className="body-left-trip-day">12/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">300,000 VND</p>
                  </div>
                </div>
                <div className="underline" />
                <div className="card-footer">
                  <div className="footer-item">
                    <Icon type="user" />
                    <span>2/4</span>
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
                    NEW 2015 <br /> TOYOTA CAMRY
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item wow fadeIn"
                data-wow-delay="0.4s"
                cover={<img alt="example" src="./img/trip-3.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Đồng Hới <Icon type="double-right" /> Hội An
                    </p>
                    <p className="body-left-trip-day">10/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">500,000 VND</p>
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
                    2000 <br /> MAZDA CX5
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item wow fadeIn"
                data-wow-delay="0.5s"
                cover={<img alt="example" src="./img/trip-4.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Huế <Icon type="double-right" /> Tam Kỳ
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">300,000 VND</p>
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
                    NEW 2015 <br /> KIA SOUL
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item wow fadeIn"
                data-wow-delay="0.6s"
                cover={<img alt="example" src="./img/trip-5.jpg" />}
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
                    NEW 2017 <br /> TOYOTA AVALON
                  </h2>
                </div>
              </Card>
              <Card
                className="card-item wow fadeIn"
                data-wow-delay="0.7s"
                cover={<img alt="example" src="./img/trip-1.jpg" />}
              >
                <div className="card-body">
                  <div className="body-left">
                    <p className="body-left-trip-title">
                      Tam Kỳ <Icon type="double-right" /> Bình Định
                    </p>
                    <p className="body-left-trip-day">16/6/2019</p>
                  </div>
                  <div className="body-right">
                    <p className="body-right-price">200,000 VND</p>
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
