import "./Main.css";
import main_img from "../../../assets/img/common/illustration.png";

const Main = () => {
  return (
    <div className="py-5 main">
      <div className="row align-items-center">
        <div className="col-md-6 left_side">
          <div className="left_side">
            <h1 className="">Virtual healthcare for you</h1>
            <p className="my-5">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button className="btn common_btn rounded-pill main_btn">
              Consult today
            </button>
          </div>
        </div>
        <div className="col-md-6 right_side">
          <div>
            <img className="img-fluid" src={main_img} alt="main image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
