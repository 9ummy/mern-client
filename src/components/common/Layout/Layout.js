import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
