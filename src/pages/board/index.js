import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Link from 'next/link';
import BoardRow from '../../components/BoardRow/BoardRow.js';
import styles from '../../../styles/Board.module.css';

function Board() {
  const columns = ['순위', '제목', '역대 최다 동시 접속자 수'];
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:5000/game/all')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data && (
        <div>
          <div className={styles.header}>
            <h3 className={styles.rank}>순위</h3>
            <h3 className={styles.imageUrl}>이미지</h3>
            <h3 className={styles.name}>제목</h3>
            <h3 className={styles.allTimePeak}>최다 접속자 수</h3>
          </div>
          {data.map((game) => (
            <BoardRow
              key={game._id}
              id={game.id}
              rank={game.rank}
              imageUrl={game.imageUrl}
              name={game.name}
              allTimePeak={game.allTimePeak}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Board;
