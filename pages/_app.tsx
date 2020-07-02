import { Provider } from 'react-redux';
import {} from 'next';
import { AppProps, AppContext } from 'next/app';
import { createWrapper } from 'next-redux-wrapper';
import Nav from '../components/Nav/Nav';
import Layout from '../hoc/Layout';
import ToggleModeButton from '../components/ToggleModeButton';
import Footer from '../components/Footer';
import { store } from '../store/store';

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <Layout>
          <Nav />
          <ToggleModeButton />
          <Component {...pageProps} />
        </Layout>
        <Footer />
        <style jsx>{`
          .page-wrapper {
            min-height: 100vh;
            position: relative;
          }
        `}</style>
      </div>
    </Provider>
  );
};

AppComponent.getInitialProps = async (appContext: AppContext) => {
  let pageProps = {};

  //If there is a getInitialProps in the Page Component then call it
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
  };
};

//Integrate Redux to Next
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(AppComponent);
