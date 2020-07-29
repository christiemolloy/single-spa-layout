import React from 'react';
import './App.scss';

import {
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div id="container">
        <nav id="links">
          <NavLink to="/react-app-one" activeClassName="active" exact="true">Red Hat Fuse</NavLink>
          <NavLink to="/react-app-two" activeClassName="active" exact="true">Red Hat AMQ</NavLink>
        </nav>
        <div id="main">
          <h1>Red Hat singla-spa example application.</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
