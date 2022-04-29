import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../../styles/Board.module.css';

function NewPost() {
  const [inputs, setInputs] = useState({
    rank: '',
    imageUrl: '',
    name: '',
    allTimePeak: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    axios
      .post('http://localhost:5000/game/new', inputs)
      .then((res) => {
        if (res.status === 201) router.push('/board');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <h2>새 게시글 작성</h2>
      <h3>순위</h3>
      <input name='rank' onChange={handleChange} />
      <h3>제목</h3>
      <input name='name' onChange={handleChange} />
      <h3>최다 동시 접속자 수</h3>
      <input name='allTimePeak' onChange={handleChange} />
      <button onClick={handleSubmit}>완료</button>
    </div>
  );
}

export default NewPost;
