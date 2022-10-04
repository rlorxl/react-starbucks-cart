import React from 'react';
const OrderContext = React.createContext({
  orderList: [],
  isAllChecked: false,
  changeAmountHandler: id => {},
  addOrderHandler: state => {},
  allCheckHandler: state => {},
  itemCheckHandler: id => {},
});

export default OrderContext;
