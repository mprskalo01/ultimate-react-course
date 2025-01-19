import { Order } from './Order';

export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Currently closed. We're happy to welcome you between {openHour}:00 &{' '}
          {closeHour}:00
        </p>
      )}
    </footer>
  );
}
