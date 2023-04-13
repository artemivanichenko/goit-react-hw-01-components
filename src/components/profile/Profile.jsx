import PropTypes from 'prop-types';

import {
  StyledProfile,
  StyledDescription,
  StyledAvatar,
  StyledName,
  StyledTag,
  StyledLocation,
  StyledStats,
  StyledLabel,
  StyledQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <>
      <StyledProfile>
        <StyledDescription>
          <StyledAvatar src={avatar} alt="User avatar" />
          <StyledName>{username}</StyledName>
          <StyledTag>@{tag}</StyledTag>
          <StyledLocation>{location}</StyledLocation>
        </StyledDescription>

        <StyledStats>
          <li>
            <StyledLabel>Followers</StyledLabel>
            <StyledQuantity>{followers}</StyledQuantity>
          </li>
          <li>
            <StyledLabel>Views</StyledLabel>
            <StyledQuantity>{views}</StyledQuantity>
          </li>
          <li>
            <StyledLabel>Likes</StyledLabel>
            <StyledQuantity>{likes}</StyledQuantity>
          </li>
        </StyledStats>
      </StyledProfile>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
