import { useState } from 'react';
import Item, { ItemInterface } from './Item';

interface Props {
  items: ItemInterface[];
  onDeleteItem: (item: number) => void;
  onToggleItem: (item: number) => void;
}

export function PackingList({ items, onDeleteItem, onToggleItem }: Props) {
  const [sortBy, setSortBy] = useState<string>('input');

  let sortedItems = items;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: ItemInterface) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
}

export default PackingList;
