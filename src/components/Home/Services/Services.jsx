import "./Services.css";
import servicesCard from "../../../Fake_Data/servicesCard";

const Services = () => {
  return (
    <>
      <div className="container py-5 service">
        <div className="row">
          <div className="col">
            <div className="text-center px-5">
              <h2 className="">Our services</h2>
              <div className="under_line"></div>
              <p className="">
                We provide to you the best choiches for you. Adjust it to your
                health needs and make sure your undergo treatment with our
                highly qualified doctors you can consult with us which type of
                service is suitable for your health
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 service_care_area">
        <div className="container">
          <div className="row">
            {servicesCard.map((services) => {
              return (
                <div key={services.id} className="col-md-4 my-5">
                  <div className="p-5 services_card">
                    <img className="img-fluid" src={services.img} alt="" />
                    <h5 className="mt-5 mb-4">{services.title}</h5>
                    <p>{services.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container my-5 text-center services_btn">
        <button className="btn common_btn rounded-pill">Learn more</button>
      </div>
    </>
  );
};

export default Services;
