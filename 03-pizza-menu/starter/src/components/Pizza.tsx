import { ReactNode } from 'react';

export function Pizza() {
  interface Pizza {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  }

  const pizzaData: Pizza[] = [
    {
      name: 'Focaccia',
      ingredients: 'Bread with italian olive oil and rosemary',
      price: 6,
      photoName: 'pizzas/focaccia.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Margherita',
      ingredients: 'Tomato and mozarella',
      price: 10,
      photoName: 'pizzas/margherita.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Spinaci',
      ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
      price: 12,
      photoName: 'pizzas/spinaci.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: 'pizzas/funghi.jpg',
      soldOut: false,
    },
    {
      name: 'Pizza Salamino',
      ingredients: 'Tomato, mozarella, and pepperoni',
      price: 15,
      photoName: 'pizzas/salamino.jpg',
      soldOut: true,
    },
    {
      name: 'Pizza Prosciutto',
      ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
      price: 18,
      photoName: 'pizzas/prosciutto.jpg',
      soldOut: false,
    },
  ];

  const arr = pizzaData.map((pizza: Pizza) => {
    return pizza.name;
  });
  console.log(arr);

  return (
    <div>
      {pizzaData.map((pizza: Pizza): ReactNode => {
        const imgSrc = pizza.name.split(' ')[1]
          ? pizza.name.split(' ')[1]
          : pizza.name;
        console.log(imgSrc);
        return (
          <div>
            <img
              src={`pizzas/${imgSrc.toLowerCase()}.jpg`}
              alt="Spinaci Pizza"
            />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
          </div>
        );
      })}
    </div>
  );

  //   return (
  //     <div>
  //       <img src="pizzas/spinaci.jpg" alt="Spinaci Pizza" />
  //       <h2>{pizzaData[2].name}</h2>
  //       <p>{pizzaData[2].ingredients}</p>
  //     </div>
  //   );
}
