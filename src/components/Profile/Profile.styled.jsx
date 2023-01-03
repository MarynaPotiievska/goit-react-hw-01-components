import styled from '@emotion/styled';

export const UserCard = styled.div`
	position: relative;
	height: 250px;
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	margin-bottom: 24px;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	text-align: center;
`;
export const UserInfoThumb = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 83%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const UserAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom:  8px;
`;

export const UserName = styled.p`
	font-weight: bold;
	font-size: 28px;
	color: #3b3b3b;
	margin-bottom: 4px;
`;
export const UserInfo = styled.p`
	font-weight: 500;
	color: #868686;
	margin-bottom: 4px;
`;

export const StatsInfoList = styled.ul`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: flex-end;	
	background-color: #e9e9e9;
	border-top: 1px solid #ddd9d9;	
`;

export const StatsData = styled.li`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	width: 83px;
	padding: 8px 12px;
	color: #3b3b3b;

	:not(:last-child) {
		border-right: 1px solid #ddd9d9;
	}
`;

export const StatsInfo = styled.span`
	font-size: 12px;

	:first-of-type {
		color: #868686;
	}

	:last-child {
		font-weight: bold;
		color: #3b3b3b;
	}	
`;
