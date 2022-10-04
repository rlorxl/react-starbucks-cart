import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.navigation}>
      <li>
        <span></span>
        <span>Home</span>
      </li>
      <li>
        <span></span>
        <span>Pay</span>
      </li>
      <li>
        <span></span>
        <span>Order</span>
      </li>
      <li>
        <span></span>
        <span>Cart</span>
      </li>
      <li>
        <span></span>
        <span>Other</span>
      </li>
    </ul>
  );
};

export default Navigation;
