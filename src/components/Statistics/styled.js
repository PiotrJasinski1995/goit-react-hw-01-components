import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 20px 0;
  text-transform: uppercase;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  background-color: #${props =>
      Math.floor((props.colorId / 100) * 16777215)
        .toString(16)
        .padStart(6, '0')};
`;

export const StatisticLabel = styled.span`
  color: white;
`;

export const StatisticPercentage = styled.span`
  color: white;
  font-size: 25px;
`;
