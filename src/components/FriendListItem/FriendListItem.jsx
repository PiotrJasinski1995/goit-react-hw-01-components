import PropTypes from 'prop-types';
import * as Styled from './styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Styled.FriendListElement class="item">
    <Styled.FriendStatus
      isOnline={isOnline}
      class="status"
    ></Styled.FriendStatus>
    <Styled.FriendAvatar
      class="avatar"
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <Styled.FriendName class="name">{name}</Styled.FriendName>
  </Styled.FriendListElement>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
