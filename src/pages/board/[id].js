import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function Post() {
  const [isModifying, setIsModifying] = useState(false);
  const [data, setData] = useState();
  const [inputs, setInputs] = useState({
    rank: '',
    name: '',
    allTimePeak: '',
  });

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/game/${id}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (data)
      setInputs({
        rank: data.rank,
        name: data.name,
        allTimePeak: data.allTimePeak,
      });
  }, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/game/${id}`, inputs)
      .then((res) => {
        setData({
          ...data,
          rank: inputs.rank,
          name: inputs.name,
          allTimePeak: inputs.allTimePeak,
        });
        setIsModifying(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const isConfirmed = confirm('정말 삭제하시겠습니까?');
    if (isConfirmed) {
      axios
        .delete(`http://localhost:5000/game/${id}`)
        .then((res) => {
          if (res.data.deletedCount === 1) router.push('/board');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      {data && (
        <table>
          <thead>
            <tr>
              <th>
                <h1>게임 정보</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>순위</td>
              <td>제목</td>
              <td>역대 최다 동시 접속자 수</td>
            </tr>
            <tr>
              <td>{data.rank}</td>
              <td>{data.name}</td>
              <td>{data.allTimePeak}</td>
            </tr>
          </tbody>
        </table>
      )}
      {isModifying && data && (
        <>
          <input
            name='rank'
            value={inputs.rank}
            type='number'
            onChange={handleChange}
          />
          <input
            name='name'
            value={inputs.name}
            type='text'
            onChange={handleChange}
          />
          <input
            name='allTimePeak'
            value={inputs.allTimePeak}
            type='number'
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>완료</button>
        </>
      )}
      <button onClick={() => setIsModifying(true)}>수정하기</button>
      <button onClick={handleDelete}>삭제하기</button>
    </div>
  );
}

export default Post;
