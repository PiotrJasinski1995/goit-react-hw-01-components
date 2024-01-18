import PropTypes from 'prop-types';
import * as Styled from './styled';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <Styled.ProfileContainer>
    <Styled.Description className="description">
      <Styled.Avatar src={avatar} alt="User avatar" />
      <Styled.Name>{username}</Styled.Name>
      <Styled.Tag>@{tag}</Styled.Tag>
      <Styled.Location>{location}</Styled.Location>
    </Styled.Description>

    <Styled.Statistics>
      <Styled.Statistic>
        <span>Followers</span>
        <Styled.StatisticNumber>{stats.followers}</Styled.StatisticNumber>
      </Styled.Statistic>
      <Styled.Statistic>
        <span>Views</span>
        <Styled.StatisticNumber>{stats.views}</Styled.StatisticNumber>
      </Styled.Statistic>
      <Styled.Statistic>
        <span>Likes</span>
        <Styled.StatisticNumber>{stats.likes}</Styled.StatisticNumber>
      </Styled.Statistic>
    </Styled.Statistics>
  </Styled.ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
