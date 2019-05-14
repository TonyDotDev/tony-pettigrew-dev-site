import { useState } from 'react';

import Header from './Header/Header';
import NavMenu from './NavMenu/NavMenu';

import './Layout.scss';

const Layout = ({ children, isLanding }) => {
  const [menu, setMenu] = useState({ isOpen: false });

  const handleToggleMenu = () => {
    setMenu(prevState => ({ isOpen: !prevState.isOpen }));
  };

  const { isOpen } = menu;

  return (
    <div className="layout">
      <Header isLanding={isLanding} handleToggleMenu={handleToggleMenu} />
      <NavMenu isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
      {children}
    </div>
  );
};

export default Layout;
