import styled, { css } from 'styled-components';

export const FriendListElement = styled.li`
  position: relative;
  width: 400px;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const FriendStatus = styled.span`
  position: absolute;
  left: 15px;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.$isonline ? 'green' : 'red')};
  border-radius: 50%;
  border: solid 1px lightblue;
  box-shadow: rgba(255, 0, 0, 0.25) 0px 54px 55px,
    rgba(255, 0, 0, 0.12) 0px -12px 30px, rgba(255, 0, 0, 0.12) 0px 4px 6px,
    rgba(255, 0, 0, 0.17) 0px 12px 13px, rgba(255, 0, 0, 0.09) 0px -3px 5px;

  ${props =>
    props.$isonline &&
    css`
      box-shadow: rgba(0, 255, 0, 0.25) 0px 54px 55px,
        rgba(0, 255, 0, 0.12) 0px -12px 30px, rgba(0, 255, 0, 0.12) 0px 4px 6px,
        rgba(0, 255, 0, 0.17) 0px 12px 13px, rgba(0, 255, 0, 0.09) 0px -3px 5px;
    `}
`;

export const FriendAvatar = styled.img`
  padding: 5px 0;
  margin-left: 50px;
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const FriendName = styled.p`
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;
