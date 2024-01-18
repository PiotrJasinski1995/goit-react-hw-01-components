import PropTypes from 'prop-types';
import * as Styled from './styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Styled.FriendListElement>
    <Styled.FriendStatus $isonline={isOnline}></Styled.FriendStatus>
    <Styled.FriendAvatar src={avatar} alt="User avatar" width="48" />
    <Styled.FriendName>{name}</Styled.FriendName>
  </Styled.FriendListElement>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isonline: PropTypes.bool,
};

export default FriendListItem;
