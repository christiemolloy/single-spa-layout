import React from 'react';
import './App.scss';
// import {
//   Nav,
//   NavItem,
//   Page,
//   PageHeader,
//   PageHeaderTools,
//   PageSidebar,
//   PageSection,
//   PageSectionVariants,
// } from '@patternfly/react-core';

import {
  NavLink,
} from 'react-router-dom';

function App() {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isActiveItem, setIsActiveItem] = useState(0);

  // const onNavToggle = () => {
  //   setIsNavOpen(!isNavOpen);
  // };

  // const onSelect = (result) => {
  //   setIsActiveItem(result.itemId);
  // };

  // const logoProps = {
  //   href: 'https://patternfly.org',
  //   target: '_blank',
  // };

  // const Header = (
  //   <PageHeader
  //     logo="Logo"
  //     logoProps={logoProps}
  //     showNavToggle
  //     isNavOpen={isNavOpen}
  //     onNavToggle={onNavToggle}
  //   />
  // );

  // const PageNav = (
  //   <Nav onSelect={onSelect} aria-label="Nav">
  //     <NavItem itemId={0} isActive={isActiveItem === 0}>
  //       <Link key="0" to="/react-app-one">
  //         React app one
  //       </Link>
  //     </NavItem>
  //     <NavItem itemId={1} isActive={isActiveItem === 1}>
  //       <Link key="1" to="/react-app-two">
  //         React app two
  //       </Link>
  //     </NavItem>
  //   </Nav>
  // );

  // const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

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
      {/* <Switch>
        <Route exact path="/" component={Services} />
        <Route path="/tools" component={Tools} />
      </Switch> */}
    </React.Fragment>
  );
}

export default App;
