// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState('EUR');
  const [secondCurrency, setSecondCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(
    function () {
      async function getConversion() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}`
          );
          const data = await res.json();
          console.log(data);
          setConvertedAmount(data.rates[secondCurrency]);
        } catch (error) {
          console.log(error);
        }
      }
      if (amount > 0 && firstCurrency !== secondCurrency) getConversion();
    },
    [amount, firstCurrency, secondCurrency]
  );
  return (
    <div>
      <input
        type="text"
        value={amount > 0 ? amount : ''}
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <select
        value={firstCurrency}
        onChange={(event) => setFirstCurrency(event.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCurrency}
        onChange={(event) => setSecondCurrency(event.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {firstCurrency !== secondCurrency ? (
        <p>{convertedAmount > 0 ? convertedAmount : 'OUTPUT'}</p>
      ) : (
        <p>BAD CURRENCY PAIR!</p>
      )}
    </div>
  );
};

export default CurrencyConverter;
