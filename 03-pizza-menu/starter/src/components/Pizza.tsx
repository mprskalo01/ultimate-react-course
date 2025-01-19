export interface PizzaInterface {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

export function Pizza(props: PizzaInterface) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{+props.price} €</span>
      </div>
    </div>
  );
}
