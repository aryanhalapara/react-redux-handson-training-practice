import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import CounterComponent from './Increment';

const Links = () => (
  <div className="App-header">
    <NavLink exact className="menu" activeClassName="selected" to="/">Home</NavLink>
    <NavLink className="menu" activeClassName="selected" to="/about">About</NavLink>
    <NavLink className="menu" activeClassName="selected" to="/contact">Contact</NavLink>
  </div>
);
const HomeComponent = () => <div><h1 style={{marginLeft:'20px'}}>Home Page</h1><CounterComponent></CounterComponent></div>;
const AboutComponent = () => <h1>About Page</h1>;
const ContactComponent = () => <h1>Contact Page</h1>;

const RouterComponent = () => (
  <Router>
    <Links></Links>
    <Route exact path='/' component={HomeComponent}></Route>
    <Route path='/home' component={HomeComponent}></Route>
    <Route path='/about' component={AboutComponent}></Route>
    <Route path='/contact' component={ContactComponent}></Route>
  </Router>
)
ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
