import { FriendListItem } from './FriendListItem';
import dataFriend from '../../data/friends.json';
import { StyledFriendList } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      <FriendListItem friends={dataFriend} />
    </StyledFriendList>
  );
};
