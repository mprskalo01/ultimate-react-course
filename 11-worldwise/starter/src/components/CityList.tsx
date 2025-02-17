import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';

export interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: { lat: number; lng: number };
  id: string;
}

interface Props {
  cities: City[];
  isLoading: boolean;
}

const CityList = ({ cities, isLoading }: Props) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map!" />
    );

  return (
    <ul className={styles.cityList}>
      <h1>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </h1>
    </ul>
  );
};

export default CityList;
