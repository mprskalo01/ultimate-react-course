import { ItemInterface } from './Item';

interface Props {
  items: ItemInterface[];
}

export function Stats({ items }: Props) {
  if (items.length < 1)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list.</em>
      </footer>
    );

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentageOfPackedItems = Math.round(
    (numOfPackedItems / numOfItems) * 100
  );
  return (
    <footer className="stats">
      <em>
        {numOfItems === numOfPackedItems
          ? 'You packed everything! Ready to go ✈'
          : `💼 You have ${numOfItems} items on your list ${
              numOfPackedItems > 0
                ? `, and you already packed
        ${numOfPackedItems} (${percentageOfPackedItems})%`
                : '.'
            }`}
      </em>
    </footer>
  );
}

export default Stats;
