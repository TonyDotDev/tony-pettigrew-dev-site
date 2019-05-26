import { useState, useEffect } from 'react';

import Header from './Header/Header';
import NavMenu from './NavMenu/NavMenu';
import Footer from './Footer/Footer';

import './Layout.scss';

const Layout = ({ children, isLanding }) => {
  const [menu, setMenu] = useState({ isOpen: false });

  const { isOpen } = menu;

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  });

  const handleToggleMenu = e => {
    e.persist();
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13))
      setMenu(prevState => ({ isOpen: !prevState.isOpen }));
  };

  return (
    <div className="layout">
      <Header isLanding={isLanding} handleToggleMenu={handleToggleMenu} />
      <NavMenu isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
      {children}
      <Footer isLanding={isLanding} />
    </div>
  );
};

export default Layout;
