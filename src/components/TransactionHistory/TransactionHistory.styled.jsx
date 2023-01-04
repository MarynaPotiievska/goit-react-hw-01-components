import styled from "@emotion/styled";

export const TransactionTable = styled.table`
	margin: 0 auto;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	margin-bottom: 24px;
	font-size: 12px;
	line-height: 2;
`;

export const TableHead = styled.thead`
	background-color: #5c9c9e;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;
	color: #ffffff;
`;

export const TableRow = styled.tr`
	color: #3b3b3b;

	:nth-of-type(odd) {
		background-color: #dafeff;
	}

	:nth-of-type(even) {
		background-color: #b5d7d8;
	}
`;

export const TableData = styled.td`
	width: 68px;
	padding-left: 32px;

	:first-of-type {
		text-transform: capitalize;
	}
`;