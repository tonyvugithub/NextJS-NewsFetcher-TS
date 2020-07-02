import * as React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectThemeMode } from '../store/slices/themeSlice';
import { updateCurrentTopic } from '../store/slices/topicSlice';
import NewsList from '../components/News/NewsList';
import axios from 'axios';
import TopicList from '../components/Topics/TopicList';

interface NewsSearchProps {
  news: object[];
  searchTerm: string;
}

interface PageContext extends GetServerSidePropsContext {}

const fetchData = async (searchQuery: string, page: number) => {
  let data = [];
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${searchQuery}&${
        page && `page=${page - 1}`
      }`
    );
    data = res.data.hits;
  } catch (err) {
    console.log('ERROR', err);
  }
  return data;
};

const NewsSearch: NextPage<NewsSearchProps> = ({ news, searchTerm }) => {
  //Note the state will not be recreated if you used SSR because its already created the first time, if news got new value, it won't be assign to fetchedNews hence need a useEffect for it.
  const [fetchedNews, setFetchedNews] = React.useState(news);
  const [searchQuery, setSearchQuery] = React.useState(searchTerm || 'react');
  const [currentPage, setCurrentPage] = React.useState(1);

  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(updateCurrentTopic({ topic: searchQuery.toLowerCase() }));
  }, []);
  //To use async/await syntax in useEffect, need to use an self invoking function
  React.useEffect(() => {
    (async () => {
      const data = await fetchData(searchQuery, currentPage);
      setFetchedNews(data);
    })();
  }, [currentPage]);

  //This effect is called when there is new request for new keyword search sent from the server
  React.useEffect(() => {
    setFetchedNews(news);
    setCurrentPage(1);
  }, [news]);

  const handleTextChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateCurrentTopic({ topic: '' }));
    Router.push(`/news?searchTerm=${searchQuery}`);
    setSearchQuery('');
  };

  const searchForm = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label">
          Can't find what you want in our list? No problem, type here!
        </label>
        <div className="controls">
          <input
            type="text"
            className="form-control"
            value={searchQuery}
            onChange={handleTextChange}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <style jsx>{`
        form {
          padding: 20px 0;
        }
        .label {
          font-weight: bold;
          color: ${themeMode == 'light' ? '#007E33' : '#fafafa'};
        }
        .controls {
          display: grid;
          grid-template-columns: 1fr 30px;
        }
        .controls button {
          background: none;
          border: none;
        }
      `}</style>
    </form>
  );
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <div id="newsWrapper" className="container">
        <h1
          className={`heading ${
            themeMode == 'light' ? 'deep-orange-text' : 'text-info'
          }`}
        >
          Ready for a good read?
        </h1>
        {searchForm}
        <div className="content-wrapper position-relative">
          <TopicList />
          <NewsList
            newsData={fetchedNews}
            prevClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            nextClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            currentPage={currentPage}
          />
        </div>
        <style jsx>{`
          .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-column-gap: 15px;
          }
          @media (max-width: 1000px) {
            .content-wrapper {
              grid-template-columns: 1fr 1.5fr;
            }
          }
          @media (max-width: 800px) {
            .content-wrapper {
              display: block;
            }
          }
          @media (max-width: 450px) {
            .heading {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

//For NextJS version before V9.3
/* NewsSearch.getInitialProps = async ({ query: { searchTerm } }: PageContext) => {
  let news;
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${searchTerm || 'react'}`
    );
    news = res.data.hits;
    //console.log(res.data);
  } catch (err) {
    console.log('ERROR', err);
    news = [];
  }
  return {
    news,
    searchTerm,
  };
}; */

//For NextJS V9.3+
export const getServerSideProps: GetServerSideProps = async ({
  query: { searchTerm },
}: PageContext) => {
  let news;
  //If there is no searchTerm then default it to 'react'
  if (!searchTerm) {
    searchTerm = 'react';
  }
  try {
    const res = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
    );
    news = res.data.hits;
  } catch (err) {
    console.log('ERROR', err);
    news = [];
  }
  return {
    props: {
      news,
      searchTerm,
    },
  };
};

export default NewsSearch;
