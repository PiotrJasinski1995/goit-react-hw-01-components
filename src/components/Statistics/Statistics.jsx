import PropTypes from 'prop-types';
import * as Styled from './styled';

const Statistics = ({ title, stats }) => (
  <Styled.StatisticsSection class="statistics">
    {title && <Styled.Title class="title">{title}</Styled.Title>}

    <Styled.StatisticList class="stat-list">
      {stats.map(stat => (
        <Styled.StatisticItem
          class="item"
          key={stat.id}
          colorId={stat.percentage}
        >
          <Styled.StatisticLabel class="label">
            {stat.label}
          </Styled.StatisticLabel>
          <Styled.StatisticPercentage class="percentage">
            {stat.percentage}%
          </Styled.StatisticPercentage>
        </Styled.StatisticItem>
      ))}
    </Styled.StatisticList>
  </Styled.StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  },
};

Styled.StatisticItem.propTypes = {
  colorId: PropTypes.string,
};

export default Statistics;
