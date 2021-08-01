
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import QRCodeDisplay from './pages/QRCodeDisplay';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          
          <Switch>
            <Route exact path="/tracevax/qrcodedisplay" component={QRCodeDisplay} />
            <Redirect from="" to="/tracevax/qrcodedisplay"/>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
