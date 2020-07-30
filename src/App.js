import React from 'react';
import './App.scss';

import {
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div id="layout">
        <div id="container">
          <nav id="links">
            <NavLink to="/fuse" activeClassName="active">Red Hat Fuse</NavLink>
            <NavLink to="/amq" activeClassName="active">Red Hat AMQ</NavLink>
          </nav>
          <div id="main">
            <h1>Red Hat singla-spa example application.</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
