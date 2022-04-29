import Image from 'next/image';
import Link from 'next/link';
import styles from './BoardRow.module.css';

function BoardRow({ id, rank, imageUrl, name, allTimePeak }) {
  return (
    <Link href={`/board/${id}`} passHref>
      <a className={styles.container}>
        <div className={styles.rank}>{rank}</div>
        {imageUrl ? (
          <div className={styles.imageUrl}>
            <Image src={imageUrl} alt={name} width={120} height={45} />
          </div>
        ) : (
          <div className={styles.imageUrl}></div>
        )}
        <divs className={styles.name}>{name}</divs>
        <div className={styles.allTimePeak}>{allTimePeak}</div>
      </a>
    </Link>
  );
}

export default BoardRow;
