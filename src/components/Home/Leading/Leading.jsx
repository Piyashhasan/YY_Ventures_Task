import "./Leading.css";
import leadingImg from "../../../assets/img/common/illustration.png";

const Leading = () => {
  return (
    <div className="container py-5 leading">
      <div className="row mt-5 align-items-center">
        <div className="col-md-6">
          <div className="px-5 mb-5">
            <img className="img-fluid" src={leadingImg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-5">
            <h2>
              Leading healthcare <br /> providers
            </h2>
            <div className="under_line"></div>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <button className="btn common_btn rounded-pill my-5">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leading;
