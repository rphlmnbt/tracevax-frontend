
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Logs from './pages/Logs';
import QRCodeDisplay from './pages/QRCodeDisplay';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          
          <Switch>
            <Route exact path="/tracevax/qrcodedisplay" component={QRCodeDisplay} />
            <Route exact path="/tracevax/signup" component={SignUp} />
            <Route exact path="/tracevax/logIn" component={LogIn} />
            <Route exact path="/tracevax/logs" component={Logs} />
            <Route exact path="/tracevax/edituser" component={EditUser} />
            <Redirect from="" to="/tracevax/logIn"/>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
