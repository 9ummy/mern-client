import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/User.module.css';

function Signin() {
  const [user, setUser] = useState({
    userId: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault;
        alert('Signin clicked');
      }}>
      <span>로그인</span>
      <input
        type='text'
        name='userId'
        placeholder='아이디'
        onChange={handleChange}
      />
      <input
        type='text'
        name='password'
        placeholder='비밀번호'
        onChange={handleChange}
      />
      <button type='submit'>로그인</button>
      <Link href='/signup'>회원가입</Link>
    </form>
  );
}

export default Signin;
