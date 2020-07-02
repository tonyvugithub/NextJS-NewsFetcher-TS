import React from 'react';
import Topics from './Topics';
import { topics } from '../../public/topics';
import { selectThemeMode } from '../../store/slices/themeSlice';
import { useSelector } from 'react-redux';

const TopicList = () => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <div className="topic-list">
      <div className="topic-header font-weight-bold">Suggested topic</div>
      <Topics topics={topics} />
      <style jsx>
        {`
          .topic-list {
            margin-bottom: 50px;
          }
          .topic-header {
            padding: 5px 10px;
            background: ${themeMode == 'light' ? '#33691e' : '#ffc400'};
            color: ${themeMode == 'light' ? '#fafafa' : '#304ffe'};
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            height: 40px;
            font-size: 1.2rem;
          }

          @media (max-width: 800px) {
            .topic-list {
              display: block;
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TopicList;
