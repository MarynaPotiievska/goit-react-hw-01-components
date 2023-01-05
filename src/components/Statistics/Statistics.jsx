import PropTypes from 'prop-types';
import {
  StatsCard,
  Title,
  UploadInfoList,
  FilesType,
} from './Statistics.styled';

export const Statistics = ({ title, stats: data }) => {
  return (
    <StatsCard>
      {title && <Title>Upload stats</Title>}

      <UploadInfoList>
        {data.map(({ id, label, percentage }) => (
          <FilesType key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </FilesType>
        ))}
      </UploadInfoList>
    </StatsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
