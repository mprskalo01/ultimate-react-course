import React, { useState } from 'react';
import Button from './Button';
import { Friend } from './FriendCard';

interface Props {
  selectedFriend: Friend;
  onSplitBill: (value: number) => void;
}

const FormSplitBill = ({ selectedFriend, onSplitBill }: Props) => {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(
      whoIsPaying === 'user' ? Number(paidByFriend) : -Number(paidByUser)
    );
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill || ''}
        onChange={(event) => setBill(Number(event.target.value))}
      />
      <label>😊 Your expense</label>
      <input
        type="text"
        value={paidByUser || ''}
        onChange={(event) =>
          setPaidByUser(
            Number(event.target.value) > bill
              ? paidByUser
              : Number(event.target.value)
          )
        }
      />
      <label>👨🏽‍🤝‍👨🏻 Friend's expense</label>
      <input type="text" value={paidByFriend} disabled />
      <label>💶 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
