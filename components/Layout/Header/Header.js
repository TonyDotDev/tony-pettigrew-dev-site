import Link from 'next/link';

import './Header.scss';

const Header = ({ handleMenuIconClick, isLanding }) => {
  const hideBrandLogoClass = isLanding ? 'header__brand-logo--hidden' : '';
  return (
    <header className="header">
      <Link href="/">
        <a>
          <img
            className={`header__brand-logo ${hideBrandLogoClass} `}
            src="/static/svg/logo.svg"
            alt="Logo, a teal green circle with a white T inside of it"
          />
        </a>
      </Link>
      <img
        className="header__menu-icon scale-in-center"
        src="/static/svg/menu-icon.svg"
        alt="basic hamburger menu icon"
      />
    </header>
  );
};

export default Header;
