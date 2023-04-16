import { PropTypes } from 'prop-types';
import {
  StyledItem,
  StyledStatus,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledItem>
      <StyledStatus isRed isOnline={isOnline}></StyledStatus>
      <StyledAvatar src={avatar} alt={name} />
      <StyledName>{name}</StyledName>
    </StyledItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
