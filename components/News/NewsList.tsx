import React from 'react';
import Pagination from '../Pagination';
import NewsPieces from './NewsPieces';

interface NewsListProps {
  newsData: object[];
  prevClick: () => void;
  nextClick: () => void;
  currentPage: number;
}

const NewsList = ({
  newsData,
  prevClick,
  nextClick,
  currentPage,
}: NewsListProps) => {
  return (
    <div className="news-list position-relative animated fadeIn">
      <Pagination
        previousClick={prevClick}
        nextClick={nextClick}
        currentPage={currentPage}
      />
      <NewsPieces newsData={newsData} />
      <style jsx>{`
        .news-list {
          padding-bottom: 20px;
        }
        @media (min-width: 450px) {
          .news-list {
            padding-bottom: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsList;
