import classes from "./OrderItem.module.css";
import {Link} from 'react-router-dom';
import OrderInfo from "./OrderInfo";
const OrderItem = props => {
  return (
    <li className={classes.orderItem}>
      <Link to={`/detail/${props.item.id}`} >
       <OrderInfo item={props.item}/>
      </Link>
    </li>
  );
};

export default OrderItem;
