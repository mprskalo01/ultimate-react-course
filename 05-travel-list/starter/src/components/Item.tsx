export interface ItemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface Props {
  item: ItemInterface;
  onDeleteItem: (item: number) => void;
}

export function Item({ item, onDeleteItem }: Props) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
