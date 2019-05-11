import Link from 'next/link';
import { useState } from 'react';

import './Header.scss';

const Header = () => {
  const [image, setImage] = useState({ isLinkHovered: false, src: '' });

  const handleMouseEnter = e => {
    console.log(e.target.getAttribute('data-src'));
    setImage({ isLinkHovered: true, src: e.target.getAttribute('data-src') });
  };

  const handleMouseLeave = e => {
    setImage({ ...image, isLinkHovered: false });
  };

  console.log(image);
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul>
            <li>
              <Link href="/about">
                <a
                  data-src="/static/img/tony-keyboard.jpg"
                  className="header__nav-link header__nav-link--bold"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a className="header__nav-link header__nav-link--bold">Work</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img
                    src="static/svg/logo.svg"
                    alt="logo, a T with a circle around it"
                  />
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="header__nav-link">
                Git
              </a>
            </li>
            <li>
              <a href="#" className="header__nav-link">
                Twit
              </a>
            </li>
            <li>
              <a href="#" className="header__nav-link">
                Linked
              </a>
            </li>
            <li>
              <a href="#" className="header__nav-link">
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
