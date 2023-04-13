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
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  id: PropTypes.string,
};
