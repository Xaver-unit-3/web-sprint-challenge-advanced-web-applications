import React from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Login</Link>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/BubblePage' component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
