import PropTypes from 'prop-types';
import {
  UserCard,
  UserInfoThumb,
  UserAvatar,
  UserName,
  UserInfo,
  StatsInfoList,
  StatsData,
  StatsInfo
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserCard>
      <UserInfoThumb>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>&#64;{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserInfoThumb>

      <StatsInfoList>
        <StatsData>
          <StatsInfo>Followers</StatsInfo>
          <StatsInfo>{followers}</StatsInfo>
        </StatsData>
        <StatsData>
          <StatsInfo>Views</StatsInfo>
          <StatsInfo>{views}</StatsInfo>
        </StatsData>
        <StatsData>
          <StatsInfo>Likes</StatsInfo>
          <StatsInfo>{likes}</StatsInfo>
        </StatsData>
      </StatsInfoList>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
