import React from 'react';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectThemeMode } from '../../store/slices/themeSlice';
import {
  selectCurrentTopic,
  updateCurrentTopic,
} from '../../store/slices/topicSlice';

export interface TopicProps {
  imgSrc: string;
  title: string;
}

const Topic = ({ imgSrc, title }: TopicProps) => {
  const themeMode = useSelector(selectThemeMode);
  const currentTopic = useSelector(selectCurrentTopic);
  const dispatch = useDispatch();

  return (
    <div
      className={`topic-wrapper p-1 ${
        title.toLowerCase() == currentTopic ? 'active' : ''
      }`}
      onClick={() => {
        dispatch(updateCurrentTopic({ topic: title.toLowerCase() }));
        Router.push(`/news?searchTerm=${title}`);
      }}
    >
      <img src={imgSrc} alt={title} height="35px" />
      <div
        className={`topic-title m-0 text-uppercase font-weight-bold align-middle ${
          themeMode == 'light' ? 'brown-text' : 'indigo-text'
        }`}
      >
        {title}
      </div>
      <style jsx>{`
        .topic-wrapper {
          margin: 10px 0;
          border-radius: 5px;
          padding: 5px;
          cursor: pointer;
        }
        .topic-wrapper:hover {
          background: ${themeMode == 'light' ? '#e8f5e9' : '#fafafa '};
        }

        .topic-wrapper.active {
          background: ${themeMode == 'light' ? '#e8f5e9' : '#fafafa '};
        }
        @media (min-width: 801px) {
          .topic-wrapper {
            display: grid;
            grid-template-columns: repeat(2, auto);
            align-items: center;
          }
          .topic-title {
            text-align: right;
          }
        }
        @media (max-width: 800px) {
          .topic-wrapper {
          }
          .topic-title {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Topic;
