
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div className="App" >
      <div className="topper"></div>
      <PortfolioContainer />
     <Footer/>
    </div>
    
  );
}

export default App;
