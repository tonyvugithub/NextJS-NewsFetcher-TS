import React from 'react';
import Topic from './Topic';
import { selectThemeMode } from '../../store/slices/themeSlice';
import { useSelector } from 'react-redux';
import { TopicProps as TopicObj } from './Topic';

export interface TopicsProps {
  topics: TopicObj[];
}

const Topics = ({ topics }: TopicsProps) => {
  const themeMode = useSelector(selectThemeMode);

  return (
    <div className="topics">
      {topics.map((topic) => (
        <Topic key={topic.title} title={topic.title} imgSrc={topic.imgSrc} />
      ))}
      <style jsx>
        {`
          .topics {
            padding: 0 10px;
          }
          .topics {
            max-height: 75vh;
            overflow: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            background-color: ${themeMode == 'light'
              ? 'rgba(205, 220, 57, 0.7)'
              : 'rgba(255, 235, 59, 0.7)'};
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
          }
          .topics::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 800px) {
            .topics {
              display: grid;
              grid-auto-flow: column;
              grid-column-gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Topics;
