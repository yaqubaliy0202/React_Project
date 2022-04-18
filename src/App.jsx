import "./App.css";
import Nav from "./components/Nav/Nav"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return <div className="App">
  <Nav/>
  <Header/>
  <AboutUs/>
  <Footer/>
  </div>;
}

export default App;
