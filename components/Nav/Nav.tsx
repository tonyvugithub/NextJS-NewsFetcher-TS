import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavLink from './NavLink';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../../store/slices/themeSlice';
import { navLinks } from '../../public/links';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const router = useRouter();
  const themeMode = useSelector(selectThemeMode);

  const NavItems = navLinks.map(({ href, title }) => {
    let activeClass = '';
    if (href !== '/') {
      activeClass = new RegExp(href).test(router.pathname) && 'active';
    } else {
      activeClass = router.pathname === href && 'active';
    }

    return (
      <NavLink key={href} href={href} activeClass={activeClass} title={title} />
    );
  });

  return (
    <div className=" d-block">
      <nav
        className={`navbar navbar-expand-md ${
          themeMode == 'light'
            ? 'navbar-dark success-color-dark'
            : 'navbar-dark bg-dark'
        } `}
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <div
                style={{
                  fontFamily: 'Merriweather, serif',
                  padding: '10px',
                  backgroundColor: `${
                    themeMode == 'light' ? 'black' : '#f57f17'
                  }`,
                  color: `${themeMode == 'light' ? '#fafafa' : 'white'}`,
                  borderRadius: '7px 0',
                  fontWeight: 'bold',
                }}
              >
                NextNews <i className="fas fa-rss"></i>
              </div>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigationBar"
            aria-controls="navigationBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigationBar"
          >
            <ul className="navbar-nav mr.auto">{NavItems}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
