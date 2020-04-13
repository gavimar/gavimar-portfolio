import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import '../src/bootstrap/css/boostrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  // <BrowserRouter>
  //      <Switch>
  //       <Route exact path="/" component={App} />
  //       <Route path="/page2" component={Portfolio} />
  //     </Switch>
  //     </BrowserRouter>,
  document.getElementById('root')
);


