import styles from './Nav.module.css';
import Link from 'next/link';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>메인</Link>
        </li>
        <li>
          <Link href='/board'>게시글목록</Link>
        </li>
        <li>
          <Link href='/board/new'>게시글작성</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/signin'>로그인</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
