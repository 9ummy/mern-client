import { useEffect } from 'react';
import axios from 'axios';

function Home() {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/now')
      .then((res) => {
        const data = res.data;
        document.getElementById('timeZone').innerHTML = data.now;
      })
      .catch((e) => {
        alert(`서버에 연결하는 중 에러가 발생했습니다.\n${e}`);
      });
  }, []);
  return (
    <>
      <div>Home</div>
      <div id='timeZone'></div>
    </>
  );
}

export default Home;
