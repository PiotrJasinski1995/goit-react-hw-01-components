import PropTypes from 'prop-types';
import * as Styled from './styled';

const TransactionHistory = ({ items }) => (
  <Styled.TableContainer>
    <table class="transaction-history">
      <thead>
        <tr>
          <Styled.StyledTh>Type</Styled.StyledTh>
          <Styled.StyledTh>Amount</Styled.StyledTh>
          <Styled.StyledTh>Currency</Styled.StyledTh>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Styled.StyledTd>{item.type}</Styled.StyledTd>
            <Styled.StyledTd>{item.amount}</Styled.StyledTd>
            <Styled.StyledTd>{item.currency}</Styled.StyledTd>
          </tr>
        ))}
      </tbody>
    </table>
  </Styled.TableContainer>
);

TransactionHistory.propTypes = {
  title: PropTypes.string,
  items: {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  },
};

export default TransactionHistory;
