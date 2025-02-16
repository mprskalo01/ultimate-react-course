// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from 'react';
import styles from './Form.module.css';

function Form() {
  const [cityName, setCityName] = useState<string>('');
  // const [country, setCountry] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [notes, setNotes] = useState<string>('');

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toISOString().split('T')[0]}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <button type="submit">Add</button>
        <button type="button">&larr; Back</button>
      </div>
    </form>
  );
}

export default Form;
