import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../store/slices/themeSlice';

interface LandingPageProps {}

const LandingPage: NextPage<LandingPageProps> = () => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="welcome-msg-wrapper container text-center justify-content-center">
        <p
          className={`msg-line1 h1 font-weight-bold ${
            themeMode == 'light' ? 'brown-text' : 'amber-text'
          }`}
        >
          News Fetcher App
        </p>
        <p
          className={`msg-line2 ${
            themeMode == 'light' ? 'teal-text' : 'lime-text'
          }`}
        >
          Hi there, welcome to News Fetcher!
        </p>
        <p
          className={`msg-line3 ${
            themeMode == 'light' ? 'text-primary' : 'orange-text'
          }`}
        >
          This is a mini project by{' '}
          <span className="font-weight-bold">Tony Vu</span>
        </p>
        <p
          className={`msg-line4 ${
            themeMode == 'light' ? 'cyan-text' : 'yellow-text'
          }`}
        >
          built by NextJS framework, React, Redux, Typescript, Bootstrap and
          Hacker News API
        </p>
        <Link href="/news">
          <a>
            <button
              type="button"
              className={`waves-effect waves-light btn ${
                themeMode == 'light' ? 'btn-indigo' : 'btn-light'
              }`}
            >
              Start Fetching
            </button>
          </a>
        </Link>
        <style jsx>{`
          .welcome-msg-wrapper {
            padding: 20px 10px;
          }
          .msg-line1 {
            font-size: 2.2rem;
          }
          .msg-line2 {
            font-size: 1.7rem;
          }
          .msg-line3 {
            font-size: 1.5rem;
          }
          .msg-line4 {
            font-size: 1.5rem;
          }
          @media (min-width: 450px) {
            .welcome-msg-wrapper {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              position: absolute;
            }
            .msg-line1 {
              font-size: 2.5rem;
            }
            .msg-line2 {
              font-size: 2rem;
            }
            .msg-line3 {
              font-size: 1.7rem;
            }
            .msg-line4 {
              font-size: 1.7rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default LandingPage;
