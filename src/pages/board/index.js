import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Board() {
  const columns = ['순위', '게임 제목', '역대 최다 동시 접속자 수'];
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
    <table>
      <thead>
        <tr>
          <th colSpan={3}>
            <h1>게임 순위</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((column, idx) => (
            <td key={idx}>{column}</td>
          ))}
        </tr>
        {!data ? (
          <tr>
            <td colSpan={6}>데이터가 없습니다.</td>
          </tr>
        ) : (
          data.map((game) => (
            <tr key={game._id}>
              <td>{game.rank}</td>
              <td>{game.name}</td>
              <td>{game.allTimePeak}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Board;
