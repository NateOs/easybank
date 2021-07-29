import "./styles/App.scss";
import Header from "./components/Header";
import Features from "./components/Features";
import Article from "./components/Article";
import Footer from "./components/Footer";
// import { features, articles } from "./data";

function App() {
  return (
    <div className="main">
      <Header />
      <Features />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
