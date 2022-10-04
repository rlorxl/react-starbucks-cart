import OrderItem from "../components/OrderItem";
import Navigation from "../components/Navigation";
import classes from "./Order.module.css";
import data from '../../store/data'

const Order = () => {
  return (
    <div className={classes.order}>
      <h1>Starbucks</h1>
      <ul>
        {/* <OrderItem /> */}
        {data.map(item => <OrderItem item={item} key={item.id}></OrderItem>)}
      </ul>
      <div className={classes.store}>
        <div>강남교보타워R</div>
        <div className={classes.badge}>1</div>
      </div>
      <Navigation />
    </div>
  );
};

export default Order;
