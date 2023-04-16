import PropTypes from 'prop-types';

import {
  StyledStatistics,
  StyledTitle,
  StyledStatList,
  StyledItem,
  StyledLabel,
  StyledPercentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StyledStatistics isRed>
      <StyledTitle>{title && title}</StyledTitle>
      <StyledStatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StyledItem key={id}>
              <StyledLabel>{label}</StyledLabel>
              <StyledPercentage>{percentage}%</StyledPercentage>
            </StyledItem>
          );
        })}
      </StyledStatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};
