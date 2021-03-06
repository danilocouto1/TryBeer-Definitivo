import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import convertData from '../utils/convertData';
import currencyFormat from '../utils/currencyFormat';

export default function OrderCard({ order, orderIndex }) {
  const history = useHistory();
  return (
    <div>

      <button
        data-testid={ `${orderIndex}-order-card-container` }
        key={ `${orderIndex}` }
        type="button"
        onClick={ () => history.push(`/orders/${orderIndex + 1}`) }
      >
        <p data-testid={ `${orderIndex}-order-number` }>
          Pedido
          {' '}
          {orderIndex + 1}
        </p>
        <p data-testid={ `${orderIndex}-order-date` }>
          Data:
          {' '}
          {convertData(order.saleDate)}
        </p>
        <p data-testid={ `${orderIndex}-order-total-value` }>
          Valor total:
          {' '}
          {currencyFormat(Number(order.totalPrice))}
        </p>
        <p data-testid={ `${orderIndex}-order-status` }>
          Status:
          {' '}
          {order.status}
        </p>
        <hr />
      </button>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  orderIndex: PropTypes.number.isRequired,
};
