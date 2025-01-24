import FriendCard, { Friend } from './FriendCard';

interface Props {
  friends: Friend[];
  selectedFriend: Friend | null;
  onSelection: (friend: Friend) => void;
}

const FriendList = ({ friends, selectedFriend, onSelection }: Props) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendList;
