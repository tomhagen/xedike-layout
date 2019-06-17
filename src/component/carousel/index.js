import React, { Component, Fragment } from "react";
import "./index.scss";
import { Button, Icon, Select, DatePicker, InputNumber } from "antd";
const { Option } = Select;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowIcon: false
    };
  }

  handleScrollToTop = () => {
    const scrollY = window.pageYOffset;
    if (scrollY > 400) {
      this.setState({
        isShowIcon: true
      });
    } else {
      this.setState({
        isShowIcon: false
      });
    }
  };
  smoothScroll = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollToTop);
  }
  render() {
    return (
      <Fragment>
        <section className="carousel" id="carousel">
          <div className="container">
            <h1 className="carousel-title wow zoomIn" >Start Your Trips Right Now </h1>
            <div className="carousel-btn wow zoomIn" data-wow-delay="0.5s">
              <Button type="primary" className="get-started btn-item">
                GET STARTED
              </Button>
              <Button className="learn-more btn-item">LEARN MORE</Button>
            </div>
          </div>
        </section>
        <section className="search-container wow zoomIn" data-wow-delay="1.5s">
          <div className="search-title">
            <Icon type="car" className="inventory-icon" />
            <span>Search Inventory</span>
          </div>
          <form className="search-form">
            <div className="search-box">
              <Select defaultValue="Start" className="search-item start">
                <Option value="Binh Dinh">Bình Định</Option>
                <Option value="Da Nang">Đà Nẵng</Option>
                <Option value="Dong Ha">Dong Ha</Option>
                <Option value="Dong Hoi">Đồng Hới</Option>
                <Option value="Hoi An">Hội An</Option>
                <Option value="Tam Ky">Tam Kỳ</Option>
                <Option value="Hue">Thừa Thiên Huế</Option>
              </Select>
              <Select
                defaultValue="Destination"
                className="search-item destination"
              >
                <Option value="Binh Dinh">Bình Định</Option>
                <Option value="Da Nang">Đà Nẵng</Option>
                <Option value="Dong Ha">Dong Ha</Option>
                <Option value="Dong Hoi">Đồng Hới</Option>
                <Option value="Hoi An">Hội An</Option>
                <Option value="Tam Ky">Tam Kỳ</Option>
                <Option value="Hue">Thừa Thiên Huế</Option>
              </Select>
              <DatePicker className="search-item date-picker" />

              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                className="search-item seat"
              />
              <Button type="primary" className="search-item btn-search">
                SEARCH
              </Button>
            </div>
          </form>
        </section>
        <div className="gift-icon">
          <img src="./img/gift.svg" />
        </div>
        <div className={`scroll-top ${this.state.isShowIcon ? "show": ""}`}>
          <a onClick={() => this.smoothScroll()}><Icon type="arrow-up" className="scroll-top-icon" /></a>
        </div>
      </Fragment>
    );
  }
}
export default Carousel;
