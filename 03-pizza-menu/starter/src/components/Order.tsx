interface Props {
  closeHour: number;
  openHour: number;
}

export function Order({ closeHour, openHour }: Props) {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
