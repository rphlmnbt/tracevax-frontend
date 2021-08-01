
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css'
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          
          <Switch>
            <Route exact path="/tracevax/signup" component={SignUp} />
            <Redirect from="" to="/tracevax/signup"/>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
