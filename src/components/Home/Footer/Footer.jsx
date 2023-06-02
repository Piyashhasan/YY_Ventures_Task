import "./Footer.css";
import footerImg from "../../../assets/img/footer/Ellipse.png";

const Footer = () => {
  return (
    <div className="footer py-5">
      <div className="container d-flex justify-content-between footer_res">
        <div className="w-25 footer_left">
          <div className="d-flex align-items-center">
            <img className="img-fluid" src={footerImg} alt="logo" />
            <h5 className="mx-3">Trafalgar</h5>
          </div>
          <div className="mt-4">
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className="mt-3">©Trafalgar PTY LTD 2020. All rights reserved</p>
          </div>
        </div>
        <div className="footer_link">
          <h4>Comapany</h4>
          <ul className="m-0 p-0">
            <li>About</li>
            <li>Testimonials </li>
            <li>Find a doctor</li>
            <li>Apps</li>
          </ul>
        </div>
        <div>
          <h4>Region</h4>
          <ul className="m-0 p-0">
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul className="m-0 p-0">
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
