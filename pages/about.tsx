import { NextPage } from 'next';
import Head from 'next/head';
import { selectThemeMode } from '../store/slices/themeSlice';
import { useSelector } from 'react-redux';
import { projectLinks } from '../public/links';

interface AboutPageProps {}

const About: NextPage<AboutPageProps> = () => {
  const themeMode = useSelector(selectThemeMode);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div id="about-wrapper" className="container">
        <div className="photo-wrapper">
          <img
            className="photo-desktop"
            src="/personal-image-desktop.png"
            alt="self-photo"
          />
          <img
            className="photo-mobile"
            src="/personal-image-mobile.png"
            alt="self-photo"
          />
          <div className="content quote-wrapper">
            <q className="quote">
              The people who are crazy enough to think they can change the world
              are the ones who do.
            </q>
            <p> - Steve Jobs</p>
          </div>
        </div>
        <div className="content-wrapper">
          <section className="profile">
            <h2 className="heading">Profile: </h2>
            <p className="content">
              Hi there, thank you for visiting my little news app. My name is
              <span className="inline-text"> TONY VU</span>, currently a proud
              Computer Programming and Analysis student at Seneca College
              majoring in
              <span className="inline-text"> Web Development</span> and{' '}
              <span className="inline-text">AI Technology</span>. Three words
              that define who I am:{' '}
              <span className="inline-text">Competent</span>,
              <span className="inline-text"> Hardworking</span>, and
              <span className="inline-text"> Efficient</span>. I do not believe
              in things that come easy in life, and hence always looking for
              challenges to improve myself. At the moment, I am seeking for a
              coop/internship opportunity to be part of important software
              projects built by great people.
            </p>
          </section>
          <section className="story">
            <h2 className="heading">Story: </h2>
            <p className="content">
              Before I started this journey in the world of technology, as a
              tech user I had always been wondered about how technology keeps
              the world running. Seneca's education has opened my eyes to a
              whole new world with no boundary. However, school materials are
              not enough to satisfy my thirst for knowledge, so I keep looking
              for new opportunities to learn either from well-known instructors
              or creating my own software. Now as a tech applicator, I am
              determined that one day I can master all the rules and practices
              in web development and AI technology to create useful applications
              that can help many people. <br /> <br />
              In my humble opinion, technology will continue to evolve and
              become indispensable to everyone’s life. There will be more and
              more opportunities to arise and I am dreaming of becoming a
              creator of new tech that can help others fulfil their dreams.
            </p>
          </section>
          <section className="portfolio">
            <h2 className="heading">Portfolio: </h2>
            <ul className="portfolio-list">
              {projectLinks.map((link) => (
                <li>
                  <a className="text-info" href={link.href} target="_blank">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <style jsx>{`
          ul {
            margin: 0;
          }
          .heading,
          .inline-text {
            color: ${themeMode == 'light' ? '#e65100' : '#FF8800'};
          }
          .heading {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .photo-desktop {
            display: none;
          }
          .photo-mobile {
            width: 125px;
          }
          .content {
            color: ${themeMode == 'light' ? '#4e342e' : '#fafafa'};
          }
          .quote {
            font-style: italic;
          }
          .photo-wrapper {
            display: grid;
            grid-auto-flow: column;
            grid-column-gap: 10px;
            padding-bottom: 10px;
          }
          #about-wrapper {
            padding-bottom: 10px;
          }
          @media (min-width: 760px) {
            .photo-mobile {
              width: 200px;
            }
          }
          @media (min-width: 950px) {
            #about-wrapper {
              display: grid;
              grid-template-columns: min-content 1fr;
              grid-column-gap: 30px;
            }
            .photo-wrapper {
              grid-auto-flow: row;
              grid-row-gap: 10px;
            }
            .photo-mobile {
              display: none;
            }
            .photo-desktop {
              display: block;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default About;
