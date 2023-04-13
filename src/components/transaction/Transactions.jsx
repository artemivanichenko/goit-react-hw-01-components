import PropTypes from 'prop-types';
import {
  StyledTransaction,
  StyledThead,
  StyledTableTitle,
  StyledString,
  StyledTableData,
} from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <StyledTransaction>
      <StyledThead>
        <tr>
          <StyledTableTitle>Type</StyledTableTitle>
          <StyledTableTitle>Amount</StyledTableTitle>
          <StyledTableTitle>Currency</StyledTableTitle>
        </tr>
      </StyledThead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <StyledString index={index} key={id}>
              <StyledTableData>{type}</StyledTableData>
              <StyledTableData>{amount}</StyledTableData>
              <StyledTableData>{currency}</StyledTableData>
            </StyledString>
          );
        })}
      </tbody>
    </StyledTransaction>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
