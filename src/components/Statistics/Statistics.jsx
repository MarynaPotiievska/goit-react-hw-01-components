import PropTypes from 'prop-types';
import { StatsCard, Title, UploadInfoList, FilesType } from './Statistics.styled';

export const Statistics = ({title, stats: data}) => {
  return (
    <StatsCard>
      {title && <Title>Upload stats</Title>}

      <UploadInfoList>
        <FilesType key={data[0].id}>
          <span>{data[0].label}</span>
          <span>{data[0].percentage}%</span>
        </FilesType>
        <FilesType key={data[1].id}>
          <span>{data[1].label}</span>
          <span>{data[1].percentage}%</span>
        </FilesType>
        <FilesType key={data[2].id}>
          <span>{data[2].label}</span>
          <span>{data[2].percentage}%</span>
        </FilesType>
        <FilesType key={data[3].id}>
          <span>{data[3].label}</span>
          <span>{data[3].percentage}%</span>
        </FilesType>
      </UploadInfoList>
    </StatsCard>
  );
};

Statistics.propTypes = {
	title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
};