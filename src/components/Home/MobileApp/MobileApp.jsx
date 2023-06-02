import "./MobileApp.css";
import leadingImg from "../../../assets/img/common/trafalgar-illustration sec03 1.png";

const MobileApp = () => {
  return (
    <div className="container py-5 leading">
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <div className="px-5">
            <h2>
              Download our <br /> mobile apps
            </h2>
            <div className="under_line"></div>
            <p>
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <button className="btn common_btn rounded-pill my-5">
              Download <span className="fs-3">&#8595;</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-5">
            <img className="img-fluid" src={leadingImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
