import PropTypes from 'prop-types';

import { TransactionTable, TableHead, TableRow, TableData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items: transactions }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <TableData>{transaction.type}</TableData>
            <TableData>{transaction.amount}</TableData>
            <TableData>{transaction.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
