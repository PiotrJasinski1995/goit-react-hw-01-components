import PropTypes from 'prop-types';
import * as Styled from './styled';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <Styled.ProfileContainer className="profile">
    <Styled.Description className="description">
      <Styled.Avatar src={avatar} alt="User avatar" className="avatar" />
      <Styled.Name className="name">{username}</Styled.Name>
      <Styled.Tag className="tag">@{tag}</Styled.Tag>
      <Styled.Location className="location">{location}</Styled.Location>
    </Styled.Description>

    <Styled.Statistics className="stats">
      <Styled.Statistic>
        <span className="label">Followers</span>
        <Styled.StatisticNumber className="quantity">
          {stats.followers}
        </Styled.StatisticNumber>
      </Styled.Statistic>
      <Styled.Statistic>
        <span className="label">Views</span>
        <Styled.StatisticNumber className="quantity">
          {stats.views}
        </Styled.StatisticNumber>
      </Styled.Statistic>
      <Styled.Statistic>
        <span className="label">Likes</span>
        <Styled.StatisticNumber className="quantity">
          {stats.likes}
        </Styled.StatisticNumber>
      </Styled.Statistic>
    </Styled.Statistics>
  </Styled.ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  },
};

export default Profile;
