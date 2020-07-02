import React from 'react';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../store/slices/themeSlice';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const themeMode = useSelector(selectThemeMode);

  return (
    <div className="layout">
      {children}
      <style jsx>
        {`
          .layout {
            background: ${themeMode == 'light' ? '#fafafa' : '#263238'};
            position: relative;
            min-height: 90vh;
          }
          @media (min-width: 450px) {
            .layout {
              min-height: 100vh;
              padding-bottom: 111px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
