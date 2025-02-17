import { Link } from 'react-router';
import styles from './CityItem.module.css';
import { City } from './CityList';

interface Props {
  city: City;
}

const formatEmoji = (flag: string) => {
  const countryCode = Array.from(
    flag,
    (codeUnit) => codeUnit.codePointAt(0) ?? 0
  )
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join('');
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const CityItem = ({ city }: Props) => {
  const { cityName, emoji, date } = city;
  return (
    <li>
      <Link className={styles.cityItem} to={`${city.id}`}>
        <span className={styles.emoji}>{formatEmoji(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
