
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import LogIn from './pages/LogIn';


function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          
          <Switch>
            <Route exact path="/tracevax/logIn" component={LogIn} />
            <Redirect from="" to="/tracevax/logIn"/>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
