import { PropTypes } from 'prop-types';
import {
  StyledItem,
  StyledStatus,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <StyledItem key={id}>
            <StyledStatus isRed isOnline={isOnline}></StyledStatus>
            <StyledAvatar src={avatar} alt={name} />
            <StyledName>{name}</StyledName>
          </StyledItem>
        );
      })}
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.string,
  id: PropTypes.string,
};
