export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently{' '}
      {hour > openHour && hour < closeHour ? 'open' : 'closed'}
    </footer>
  );
}
