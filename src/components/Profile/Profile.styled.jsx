import styled from '@emotion/styled';



export const UserCard = styled.div`
	height: 25vh;
	width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	text-align: center;
`;

export const UserAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;

`

export const UserName = styled.p`
	font-weight: bold;
	font-size: 28px;
`;

export const StatsInfoList = styled.ul`
	display: flex;
	justify-content: space-evenly;
	align-item: center;
	gap: 12px;
`;
