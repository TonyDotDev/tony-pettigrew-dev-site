import { useState } from 'react';

import Header from './Header/Header';
import NavMenu from './NavMenu/NavMenu';

import './Layout.scss';

const Layout = ({ children, isLanding }) => {
  const [menu, setMenu] = useState({ isOpen: false });

  const handleMenuIconClick = () => {
    setMenu(prevState => ({ isOpen: !prevState }));
  };

  return (
    <div className="layout">
      <Header isLanding={isLanding} handleMenuIconClick={handleMenuIconClick} />
      <NavMenu />
      {children}
    </div>
  );
};

export default Layout;
