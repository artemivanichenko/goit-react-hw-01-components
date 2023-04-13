import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  margin: 10px auto;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  width: 300px;
  height: 80px;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(28, 173, 163, 0.5);
  margin: 10px auto;
  overflow: hidden;
  align-items: center;
`;

export const StyledStatus = styled.span`
  margin: 20px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  /* margin: 10px auto; */
  padding: 0;
  margin: 10px;
`;

export const StyledName = styled.p`
  /* margin: 10px auto; */
  padding: 0;
  margin: 10px;
  font-size: 22px;
  font-weight: 600;
`;
