import React, { useState } from 'react';
import './App.scss';
import {
  Nav,
  NavItem,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActiveItem, setIsActiveItem] = useState(0);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const onSelect = (result) => {
    setIsActiveItem(result.itemId);
  };

  const logoProps = {
    href: 'https://patternfly.org',
    target: '_blank',
  };

  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );

  const PageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavItem itemId={0} isActive={isActiveItem === 0}>
        <Link key="0" to="/react-app-one">
          React app one
        </Link>
      </NavItem>
      <NavItem itemId={1} isActive={isActiveItem === 1}>
        <Link key="1" to="/react-app-two">
          React app two
        </Link>
      </NavItem>
    </Nav>
  );

  const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
    </Page>
  );
}

export default App;
