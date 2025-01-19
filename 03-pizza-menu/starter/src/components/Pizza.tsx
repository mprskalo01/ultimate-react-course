export interface PizzaInterface {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

interface Props {
  pizza: PizzaInterface;
}

export function Pizza(props: Props) {
  if (props.pizza.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{+props.pizza.price} €</span>
      </div>
    </li>
  );
}
