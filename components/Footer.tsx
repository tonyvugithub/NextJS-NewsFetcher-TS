import React from 'react';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../store/slices/themeSlice';
import { socialLinks } from '../public/links';

const Footer = () => {
  const themeMode = useSelector(selectThemeMode);

  const socialMediaLinks = (
    <div className="container">
      <ul className="list-unstyled row m-0">
        {socialLinks.map(({ href, imgSrc, title }) => (
          <li key={title} className="col">
            <a href={href} target="_blank">
              <img src={imgSrc} title={title} alt={title} width="25px" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="footer-wrapper">
      <footer
        className={`page-footer font-small ${
          themeMode == 'light' ? 'success-color-dark' : 'elegant-color-dark'
        }`}
      >
        <div
          className={`text-center text-md-left ${
            !(themeMode == 'light') && ''
          }`}
        >
          <div className="row">
            <div className="col mx-auto py-3 text-center text-light">
              {socialMediaLinks}
            </div>
            <hr className="clearfix w-100 d-md-none" />
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="#"> Tony Vu</a>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          @media (min-width: 450px) {
            .footer-wrapper {
              position: absolute;
              left: 0;
              bottom: 0;
              height: 110.6px;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
