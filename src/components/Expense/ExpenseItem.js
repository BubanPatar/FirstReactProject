import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_des">
        <div className="price">${props.amount}</div>
      </div>

    </Card>
  );
}

export default ExpenseItem;
