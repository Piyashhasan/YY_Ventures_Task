import "./LatestArticle.css";
import article from "../../../Fake_Data/article";

const LatestArticle = () => {
  return (
    <div className="latest_article_container py-5">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>Check out our latest article</h2>
            <div className="under_line"></div>
          </div>
        </div>
      </div>
      <div className="article_row">
        <div className="container mt-5">
          <div className="row mt-5 p-5">
            {article.map((articleDetails) => {
              return (
                <div key={articleDetails.id} className="col-md-4 p-3">
                  <div className="article_card">
                    <img
                      className="img-fluid w-100"
                      src={articleDetails.img}
                      alt=""
                    />
                    <div className="px-5 mt-5">
                      <h5>{articleDetails.title}</h5>
                      <p className="my-3">{articleDetails.description}</p>
                      <button className="btn mb-3">Read more &#8594;</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-5 text-center view_btn">
            <button className="btn common_btn rounded-pill">View all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
