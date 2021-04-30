import Login from './Components/login/Login';
import SignUp from './Components/SignUp/SignUp';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Components/navigator/Navigation';
import './App.css'

function App() {
    return ( 
    <div className = "App" >
        <Navigation/>
        <Router >
          <Switch>
            <Route path="/login"> < Login /> </Route>
            <Route path="/sign"> < SignUp /> </Route> 
          </Switch>
         </Router>

    </div>
    );
}

export default App;