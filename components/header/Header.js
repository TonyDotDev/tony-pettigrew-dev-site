import Link from 'next/link';
import { useState } from 'react';

import './Header.scss';

const Header = () => {
  const [image, setImage] = useState({ isLinkHovered: false, src: '' });

  const handleMouseEnter = e => {
    setImage({ isLinkHovered: true, src: e.target.getAttribute('data-src') });
  };

  const handleMouseLeave = () => {
    setImage({ ...image, isLinkHovered: false });
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul>
            <li>
              <Link href="/about">
                <a
                  data-src="/static/img/tony-keyboard.png"
                  data-alt="Tony on stage, playing a synthesizer"
                  className="header__nav-link header__nav-link--bold slide-in-left"
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
                  data-src="/static/img/crn-search-page.png"
                  data-alt="Javascript code in a code editor window"
                  className="header__nav-link header__nav-link--bold slide-in-left"
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
              <Link href="/">
                <a>
                  <img
                    className="scale-in-center"
                    src="static/svg/logo.svg"
                    alt="logo, a T with a circle around it"
                  />
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="header__nav-link slide-in-right">
                Git
              </a>
            </li>
            <li>
              <a href="#" className="header__nav-link slide-in-right">
                Twit
              </a>
            </li>
            <li>
              <a href="#" className="header__nav-link slide-in-right">
                Linked
              </a>
            </li>
            <li>
              <a href="#" className="header__nav-link slide-in-right">
                Email
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <img
        className={`header__hidden-img ${image.isLinkHovered ? 'active' : ''}`}
        src={image.src ? image.src : ''}
        alt=""
      />
    </>
  );
};

export default Header;
