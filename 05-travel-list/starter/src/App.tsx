import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { ItemInterface } from './components/Item';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState<ItemInterface[]>([]);

  function handleAddItems(item: ItemInterface) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length < 1) return;
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
