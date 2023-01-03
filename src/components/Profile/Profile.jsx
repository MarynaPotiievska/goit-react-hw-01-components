import PropTypes from 'prop-types';
import { UserCard, StatsInfoList, UserAvatar, UserName } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserCard>
      <div>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>&#64;{tag}</p>
        <p>{location}</p>
      </div>

      <StatsInfoList>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
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
	likes: PropTypes.number.isRequired
  })
};
