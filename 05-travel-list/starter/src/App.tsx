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
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
