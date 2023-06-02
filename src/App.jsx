import "./App.css";
import {
  LatestArticle,
  Leading,
  Main,
  MobileApp,
  Nav,
  Services,
  Footer,
  CustomerFeedBack,
} from "./components/Home";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Nav />
        <Main />
      </div>
      <section>
        <Services />
      </section>
      <section>
        <Leading />
      </section>
      <section>
        <MobileApp />
      </section>
      <section>
        <CustomerFeedBack />
      </section>
      <section>
        <LatestArticle />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
