import Link from 'next/link';

import './Header.scss';

const Header = ({ handleToggleMenu, isLanding }) => {
  const hideBrandLogoClass = isLanding ? 'header__brand-logo--hidden' : '';
  const headerLandingClass = isLanding ? 'header--landing' : '';
  const animateMenuIcon = isLanding ? 'scale-in-center' : 'slide-in-top';
  return (
    <header className={`header ${headerLandingClass}`}>
      <Link href="/">
        <a>
          <img
            className={`header__brand-logo ${hideBrandLogoClass} slide-in-top`}
            src="/static/svg/logo.svg"
            alt="Logo, a teal green circle with a white T inside of it"
          />
        </a>
      </Link>
      <img
        tabIndex="0"
        onClick={handleToggleMenu}
        onKeyUp={handleToggleMenu}
        className={`header__menu-icon ${animateMenuIcon}`}
        src="/static/svg/menu-icon.svg"
        alt="basic hamburger menu icon"
      />
    </header>
  );
};

export default Header;
