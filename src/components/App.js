import React from "react";
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import LandingMain from './LandingMain';
import Portfolio from './Portfolio'


// import Portfolio from './Portfolio'
// import Hero from "./Hero";
// import Portfolio from "./portfolio_grid";
// import Portfolio2 from "./portfolio_grid2";
// import Contact from "./contact";

export default class App extends React.Component {
  render() {
    return (

      <div className="App">
      <Switch>
        <Route exact path="/">
        <Header/>
          <LandingMain/>
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio/>
        </Route>
      </Switch>
      
    </div >
      
        //  <div className="wrapper">
        // <Header/>
        // <LandingMain/>
        // {/* <Portfolio/> */}
       
        // </div> 
      
    );
  }
}