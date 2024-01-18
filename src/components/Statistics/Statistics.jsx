import PropTypes from 'prop-types';
import * as Styled from './styled';

const Statistics = ({ title, stats }) => (
  <Styled.StatisticsSection>
    {title && <Styled.Title>{title}</Styled.Title>}

    <Styled.StatisticList>
      {stats.map(stat => (
        <Styled.StatisticItem key={stat.id} $colorid={stat.percentage}>
          <Styled.StatisticLabel>{stat.label}</Styled.StatisticLabel>
          <Styled.StatisticPercentage>
            {stat.percentage}%
          </Styled.StatisticPercentage>
        </Styled.StatisticItem>
      ))}
    </Styled.StatisticList>
  </Styled.StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

Styled.StatisticItem.propTypes = {
  colorid: PropTypes.number,
};

export default Statistics;
