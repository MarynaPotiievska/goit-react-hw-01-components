import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-bottom: 8px;
`;

export const FriendStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: ${props => {
    return props.isOnline ? '#289407' : '#ce1d1d';
  }};
`;

export const FriendAvatar = styled.img`
  border: 1px solid #b8abab;
  border-radius: 8px;
  margin-right: 8px;
`;

export const FriendName = styled.p`
  font-weight: 600;
`;
