import { useState, useEffect } from 'react';
import Image from 'next/image';
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
        <div>
          <Image src={data.imageUrl} alt={data.name} width={120} height={45} />
          {isModifying ? (
            <>
              <h3>순위</h3>
              <input
                name='rank'
                value={inputs.rank}
                type='number'
                onChange={handleChange}
              />
              <h3>제목</h3>
              <input
                name='name'
                value={inputs.name}
                type='text'
                onChange={handleChange}
              />
              <h3>최다 동시 접속자 수</h3>
              <input
                name='allTimePeak'
                value={inputs.allTimePeak}
                type='number'
                onChange={handleChange}
              />
              <button onClick={handleUpdate}>완료</button>
            </>
          ) : (
            <>
              <h3>순위</h3>
              <p>{data.rank}</p>
              <h3>제목</h3>
              <p>{data.name}</p>
              <h3>최다 동시 접속자 수</h3>
              <p>{data.allTimePeak}</p>
              <button onClick={() => setIsModifying(true)}>수정하기</button>
              <button onClick={handleDelete}>삭제하기</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Post;
