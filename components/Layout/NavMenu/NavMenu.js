import Link from 'next/link';
import { useState } from 'react';

import './NavMenu.scss';

const NavMenu = ({ isOpen }) => {
  const [image, setImage] = useState({ isLinkHovered: false, src: '' });

  const handleMouseEnter = e => {
    setImage({ isLinkHovered: true, src: e.target.getAttribute('data-src') });
  };

  const handleMouseLeave = () => {
    setImage({ ...image, isLinkHovered: false });
  };

  return (
    <>
      <nav className="nav-menu">
        <ul className="nav-menu__nav-links">
          <li>
            <Link href="/about">
              <a
                data-src="/static/img/tony-keyboard.png"
                data-alt="Tony on stage, playing a synthesizer"
                className="nav-menu__link nav-menu__link--bold"
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
                className="nav-menu__link nav-menu__link--bold"
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
              data-src="/static/img/code.png"
              data-alt="Javascript code in a code editor window"
              className="nav-menu__link nav-menu__link--bold"
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Work
            </a>
          </li>
        </ul>
        <ul className="nav-menu__contact-links">
          <li>
            <a href="#" className="nav-menu__social-link">
              Git
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu__social-link">
              Twit
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu__social-link">
              Linked
            </a>
          </li>
          <li>
            <a href="#" className="nav-menu__social-link">
              Email
            </a>
          </li>
        </ul>
      </nav>
      <img
        className={`header__hidden-img ${image.isLinkHovered ? 'active' : ''}`}
        src={image.src ? image.src : ''}
        alt=""
      />
    </>
  );
};

export default NavMenu;
