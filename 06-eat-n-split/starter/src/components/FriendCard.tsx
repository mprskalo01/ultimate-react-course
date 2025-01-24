import Button from './Button';
export interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

interface Props {
  friend: Friend;
  selectedFriend: Friend | null;
  onSelection: (friend: Friend) => void;
}

export default function FriendCard({
  friend,
  selectedFriend,
  onSelection,
}: Props) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={`My friend ${friend.name}`} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}
