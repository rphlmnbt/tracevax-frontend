
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import LogIn from './pages/LogIn';
import Logs from './pages/Logs';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          
          <Switch>
            <Route exact path="/tracevax/signup" component={SignUp} />
            <Route exact path="/tracevax/logIn" component={LogIn} />
            <Route exact path="/tracevax/logs" component={Logs} />
            <Redirect from="" to="/tracevax/logs"/>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
