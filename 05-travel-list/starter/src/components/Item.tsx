export interface ItemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface Props {
  item: ItemInterface;
  onDeleteItem: (item: number) => void;
  onToggleItem: (item: number) => void;
}

export function Item({ item, onDeleteItem, onToggleItem }: Props) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed ? 1 : 0}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
