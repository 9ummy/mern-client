import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import styles from '../../styles/User.module.css';

function Signup() {
  const [user, setUser] = useState({
    userId: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    birth: '',
    address: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(userActions.signupRequest(user));
        setUser({
          userid: '',
          password: '',
          email: '',
          name: '',
          phone: '',
          birth: '',
          address: '',
        });
      }}>
      <span>회원가입</span>
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
      <input
        type='text'
        name='email'
        placeholder='이메일'
        onChange={handleChange}
      />
      <input
        type='text'
        name='name'
        placeholder='이름'
        onChange={handleChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='전화번호'
        onChange={handleChange}
      />
      <input
        type='text'
        name='birth'
        placeholder='생년월일'
        onChange={handleChange}
      />
      <input
        type='text'
        name='address'
        placeholder='주소'
        onChange={handleChange}
      />
      <button type='submit'>회원가입</button>
      <Link href='/signin'>로그인</Link>
    </form>
  );
}

export default Signup;
