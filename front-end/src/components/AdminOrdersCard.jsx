import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import admOrders from '../methods/admOrders';

function AdminOrdersCard() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const response = await admOrders.getAll(user.token);
        setOrders(response.orders);
      } else { history.push('/login'); }
    };
    fetchOrders();
  }, [history]);

  return (
    <div>
      { orders.map((e, i) => (
        <button
          key={ i }
          className="order-card"
          type="button"
          onClick={ () => history.push(`/admin/orders/${e.id}`) }
        >
          <h1 data-testid={ `${i}-order-number` }>{ `Pedido ${e.id}` }</h1>
          <p data-testid={ `${i}-order-address` }>
            { `${e.deliveryAddress}, ${e.deliveryNumber}` }
          </p>
          <span data-testid={ `${i}-order-total-value` }>
            {`R$ ${e.totalPrice.replace('.', ',')}` }
          </span>
          <span data-testid={ `${i}-order-status` }>
            { e.status }
          </span>
        </button>
      ))}
    </div>
  );
}

export default AdminOrdersCard;
