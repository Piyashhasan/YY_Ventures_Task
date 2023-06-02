import Slider from "react-slick";
import "./CustomerFeedBack.css";
import sliderImg from "../../../assets/img/slider_img/image.png";

const CustomerFeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container py-5 slider">
      <Slider {...settings}>
        <div className="slider_card">
          <div className="title text-center">
            <h3>What our customer are saying</h3>
            <div className="under_line"></div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-5 hero">
            <div className="d-flex align-items-center justify-content-between px-5 img_des">
              <img
                className="img-fluid rounded-circle"
                src={sliderImg}
                alt="image"
              />
              <div className="mx-5">
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
              </div>
            </div>
            <div className="w-50 px-5 comments">
              <p>
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </div>
          </div>
        </div>
        <div className="slider_card">
          <div className="title text-center">
            <h3>What our customer are saying</h3>
            <div className="under_line"></div>
          </div>
          <div className="d-flex align-items-center justify-content-between px-5 hero">
            <div className="d-flex align-items-center justify-content-between px-5 img_des">
              <img
                className="img-fluid rounded-circle"
                src={sliderImg}
                alt="image"
              />
              <div className="mx-5">
                <h5>Edward Newgate</h5>
                <p>Founder Circle</p>
              </div>
            </div>
            <div className="w-50 px-5 comments">
              <p>
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </div>
          </div>
        </div>
      </Slider>

      {/* ----------------------- */}
    </div>
  );
};

export default CustomerFeedBack;
