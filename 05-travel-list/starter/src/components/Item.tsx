export interface ItemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface Props {
  item: ItemInterface;
}

export function Item({ item }: Props) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
