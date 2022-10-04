import OrderInfo from '../components/OrderInfo';
import Amount from '../components/UI/Amount';
import Button from '../components/UI/Button';
import { useState, useContext } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import data from '../../store/data';
import classes from './OrderDetail.module.css';

import OrderContext from '../../store/order-context';

const OrderDetail = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const orderCtx = useContext(OrderContext);

  const clickCountHandler = e => {
    if (e.target.textContent === '-' && count > 1) {
      setCount(prevCount => prevCount - 1);
    }
    if (e.target.textContent === '+') setCount(prevCount => prevCount + 1);
  };

  const addOrderListHandler = () => {
    orderCtx.addOrderHandler({
      title: filteredData.title,
      price: filteredData.price,
      amount: count,
      isChecked: false,
    });

    navigate(`/cart`);
  };

  const { id } = useParams();
  const filteredData = data.find(item => item.id === +id);

  return (
    <div className={classes.wrapper}>
      <OrderInfo item={filteredData} styles={classes.detail} />
      <Amount
        styles={classes.amount}
        onClick={clickCountHandler}
        count={count}
      />
      <Button onClick={addOrderListHandler}>담기</Button>
    </div>
  );
};

export default OrderDetail;
