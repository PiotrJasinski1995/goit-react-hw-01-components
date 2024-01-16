import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 20px auto;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: white;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

export const Statistics = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Statistic = styled.li`
  width: 100px;
  height: 100px;
  background-color: lightgrey;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatisticNumber = styled.span`
  font-weight: bold;
`;
