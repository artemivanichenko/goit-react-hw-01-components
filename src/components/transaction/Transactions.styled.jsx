import styled from 'styled-components';

export const StyledTransaction = styled.table`
  border-spacing: 1px;
  margin: 0 auto;
  width: 600px;
  box-shadow: 0 5px 10px rgba(54, 207, 202, 0.5);
  border-radius: 4px;
  overflow: hidden;
`;

export const StyledThead = styled.thead`
  text-align: center;
  background-color: #18aeb337;
`;

export const StyledTableTitle = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledString = styled.tr`
  background-color: ${props => (props.index % 2 === 0 ? 'white' : 'lightgray')};
`;

export const StyledTableData = styled.td`
  padding: 10px 20px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #00000076;
  text-align: center;
`;
