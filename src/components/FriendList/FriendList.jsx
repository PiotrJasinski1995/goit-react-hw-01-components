import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import * as Styled from './styled';

const FriendList = ({ friends }) => (
  <Styled.FriendListStyled>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </Styled.FriendListStyled>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
