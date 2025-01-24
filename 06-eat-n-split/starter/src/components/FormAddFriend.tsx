import { useState } from 'react';
import Button from './Button';
import { Friend } from './FriendCard';

interface Props {
  onAddFriend: (newFriend: Friend) => void;
}

const FormAddFriend = ({ onAddFriend }: Props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const clearInputs = () => {
    setName('');
    setImage('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !image) return;
    const newFriend = { id: Date.now(), name, image, balance: 0 };
    onAddFriend(newFriend);
    clearInputs();
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏽‍🤝‍👨🏻 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label>🖼 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
