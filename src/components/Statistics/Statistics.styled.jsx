import styled from '@emotion/styled';

function getRandomHexColor() {
	let color = Math.floor(Math.random() * 16777215).toString(16);
	if( color === 'ffffff') {
		color = Math.floor(Math.random() * 16777215).toString(16);
	}
	return `#${color}`;
  }

export const StatsCard = styled.section`
	width: 250px;
	margin: 0 auto;
	text-align: center;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Title = styled.h2`
  	padding: 8px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 24px;
	color: #636363;
`;

export const UploadInfoList = styled.ul`
	display: flex;
	justify-content: space-evenly;
	color: #ffffff;
	-webkit-text-stroke-width: 0.5px;
	-webkit-text-stroke-color: #b8abab;
`;

export const FilesType = styled.li`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	width: 65px;
	background-color: ${key => getRandomHexColor()};
`;