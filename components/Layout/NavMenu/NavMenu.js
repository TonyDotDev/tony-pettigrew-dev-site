import Link from 'next/link';
import { useState } from 'react';

import './NavMenu.scss';

const NavMenu = ({ isOpen, handleToggleMenu }) => {
  const [image, setImage] = useState({
    isLinkHovered: false,
    src: '',
  });

  const handleMouseEnter = e => {
    setImage({ src: e.target.getAttribute('data-src'), isLinkHovered: true });
  };

  const handleMouseLeave = () => {
    setImage({ ...image, isLinkHovered: false });
  };

  const menuOpenClass = isOpen ? 'nav-menu--open' : '';

  return (
    <div className={`nav-menu ${menuOpenClass}`}>
      <nav className="nav-menu__links-container">
        <ul className="nav-menu__nav-links">
          <li>
            <Link href="/about">
              <a
                data-src="/static/img/tony-keyboard.png"
                data-alt="Tony on stage, playing a synthesizer"
                className="nav-menu__nav-link"
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a
                data-src="/static/img/code.png"
                data-alt="Javascript code in a code editor window"
                className="nav-menu__nav-link"
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Work
              </a>
            </Link>
          </li>
          <li>
            <a
              href="#"
              data-src="/static/img/contact-2.jpg"
              data-alt="Javascript code in a code editor window"
              className="nav-menu__nav-link "
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="nav-menu__social-links">
          <li>
            <a href="#" className="nav-menu__social-link">
              <img src="/static/svg/mail-icon.svg" alt="email icon" />
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu__social-link">
              <img src="/static/svg/git-icon.svg" alt="github icon" />
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu__social-link">
              <img src="/static/svg/twit-icon.svg" alt="twitter icon" />
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu__social-link">
              <img src="/static/svg/linked-icon.svg" alt="linkdin icon" />
            </a>
          </li>
        </ul>
        <img
          className="nav-menu__close-button"
          src="/static/svg/arrow-right.svg"
          alt="menu exit button"
          onClick={handleToggleMenu}
        />
      </nav>

      <div className="nav-menu__img-display">
        <img
          className={`nav-menu__hidden-img ${
            image.isLinkHovered ? 'active' : ''
          }`}
          src={image.src ? image.src : ''}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavMenu;
