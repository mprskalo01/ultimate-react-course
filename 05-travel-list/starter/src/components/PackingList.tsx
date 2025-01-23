import Item, { ItemInterface } from './Item';

interface Props {
  items: ItemInterface[];
  onDeleteItem: (item: number) => void;
  onToggleItem: (item: number) => void;
}

export function PackingList({ items, onDeleteItem, onToggleItem }: Props) {
  return (
    <div className="list">
      <ul>
        {items.map((item: ItemInterface) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
