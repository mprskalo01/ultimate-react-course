import Item, { ItemInterface } from './Item';

const initialItems: ItemInterface[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

export function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item: ItemInterface) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
