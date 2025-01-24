import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';
import FormSplitBill from './components/FormSplitBill';
import { useState } from 'react';
import { Friend } from './components/FriendCard';
function App() {
  const initialFriends: Friend[] = [
    {
      id: 118836,
      name: 'Clark',
      image: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
    },
    {
      id: 933372,
      name: 'Sarah',
      image: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
    },
    {
      id: 499476,
      name: 'Anthony',
      image: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
    },
  ];

  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<Friend[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((isShowAddFriend) => !isShowAddFriend);
  };
  const handleAddFriend = (newFriend: Friend) => {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend: Friend) => {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value: number) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
