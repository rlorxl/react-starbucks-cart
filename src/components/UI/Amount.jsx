import React from 'react';
import classes from './Amount.module.css';

const Amount = props => {
  return (
    <div className={`${props.styles} ${classes.amount}`}>
      <button onClick={props.onClick}>-</button>
      <span>{props.count}</span>
      <button onClick={props.onClick}>+</button>
    </div>
  );
};

export default Amount;
