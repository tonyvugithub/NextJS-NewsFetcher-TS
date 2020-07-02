import React from 'react';
import { selectThemeMode } from '../store/slices/themeSlice';
import { useSelector } from 'react-redux';

interface NewsListProps {
  previousClick: () => void;
  nextClick: () => void;
  currentPage: number;
}

const Pagination: React.FC<NewsListProps> = ({
  previousClick,
  nextClick,
  currentPage,
}) => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <nav>
      <ul className="pagination pagination-md justify-content-start m-0">
        <li
          className={`page-item ${currentPage == 1 ? 'disabled' : ''}`}
          onClick={previousClick}
        >
          <a
            /* href={target} */
            className="page-link waves-effect"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link waves-effect">
            {currentPage} <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="page-item" onClick={nextClick}>
          <a
            /* href={target} */ className="page-link waves-effect"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
      <style jsx>{`
        nav {
          box-shadow: 0 4px 2px -2px ${themeMode == 'light' ? '#1b5e20' : '#ffc400'};
        }
        .page-link {
          color: ${themeMode == 'light' ? '#1b5e20' : '#ffc400'} !important;
        }
      `}</style>
    </nav>
  );
};

export default Pagination;
