import Layout from '../components/common/Layout/Layout';
import { wrapper } from '../../redux/store.ts';
import '../../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
