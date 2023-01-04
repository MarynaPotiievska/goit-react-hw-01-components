import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendsContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </FriendsContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
