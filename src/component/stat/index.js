import React, { Component, Fragment } from "react";
import "./index.scss";
import CountUp from 'react-countup';

class stat extends Component {
  render() {
    return (
      <Fragment>
        <section className="stat">
          <div className="container">
            <div className="stat-box box-left wow zoomIn">
              <img src="./img/img_mac.png" className="img-mac"/>
              <img src="./img/img_iPad.png" className="img-iphone"/>
            </div>
            <div className="stat-box box-right">
              <div className="box-item hvr-grow-shadow wow zoomIn" data-wow-delay="0.4s">
                <div className="item item-number">
                  <CountUp end={300} duration={8}/>
                </div>
                <div className="item item-title">PASSENGER</div>
                <div className="item item-content">
                  Hàng nghìn lượt khách tin tưởng chúng tôi để tìm những chuyến
                  xe với chất lượng tốt nhất.
                </div>
              </div>
              <div className="box-item hvr-grow-shadow wow zoomIn" data-wow-delay="0.6s">
                <div className="item item-number">
                <CountUp end={491} duration={8}/>
                </div>
                <div className="item item-title">DRIVER</div>
                <div className="item item-content">
                  Hệ thống của chúng tôi kết nối hàng trăm tài xế sẵn sàng phục
                  vụ nhu cầu đi lại mỗi ngày.
                </div>
              </div>
              <div className="box-item hvr-grow-shadow wow zoomIn" data-wow-delay="0.8s">
                <div className="item item-number">
                <CountUp end={430} duration={8}/>
                </div>
                <div className="item item-title">TRIPS</div>
                <div className="item item-content">
                  Số liệu này cho chúng tôi biết bạn đã về đến nhà an toàn.
                </div>
              </div>
              <div className="box-item hvr-grow-shadow wow zoomIn" data-wow-delay="1s">
                <div className="item item-number">
                <CountUp end={4447} duration={8}/>
                </div>
                <div className="item item-title">CO2 (kg) reduce</div>
                <div className="item item-content">
                  Chúng ta đã góp phần làm giảm lượng khí CO2 trung bình mỗi
                  ngày.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export default stat;
