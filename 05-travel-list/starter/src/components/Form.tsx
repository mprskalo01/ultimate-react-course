import { useState } from 'react';
import { ItemInterface } from './Item';

interface Props {
  onAddItems: (item: ItemInterface) => void;
}

export function Form({ onAddItems }: Props) {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!description) return;
    const newItem: ItemInterface = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number: number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
