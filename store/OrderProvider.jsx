import React, { useState, useEffect } from 'react';
import OrderContext from './order-context';

const OrderProvider = props => {
  const [orderList, setOrderList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setOrderList(orderList.map(item => ({ ...item, isChecked: isAllChecked })));
  }, [isAllChecked]);

  useEffect(() => {
    if (orderList.length > 0) {
      let allCheck = true;

      orderList.forEach(item => {
        if (!item.isChecked) allCheck = false;
      });

      setIsAllChecked(allCheck);
    }
  }, [orderList]);

  const changeAmountHandler = (id, degit) => {
    setOrderList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, amount: item.amount + degit } : item
      )
    );
  };

  const addOrderHandler = order => {
    const id = Math.max(...orderList.map(order => order.id), 0) + 1;
    setOrderList(prevList => [...prevList, { id, ...order }]);
  };

  const allCheckHandler = () => {
    setIsAllChecked(prev => !prev);
  };

  const itemCheckHandler = id => {
    setOrderList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orderList,
        isAllChecked,
        changeAmountHandler,
        addOrderHandler,
        allCheckHandler,
        itemCheckHandler,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
