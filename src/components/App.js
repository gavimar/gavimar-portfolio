import React from "react";
import '../stylesheets/App.scss';
import Header from './Header';
import LandingMain from './LandingMain';
// import Hero from "./Hero";
// import Portfolio from "./portfolio_grid";
// import Portfolio2 from "./portfolio_grid2";
// import Contact from "./contact";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <Header/>
          <LandingMain/>
          {/* <Hero />
          <Portfolio />
          <Portfolio2 />
          <Contact /> */}
        </div>
      </>
    );
  }
}