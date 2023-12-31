import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
    const saveExpenseDataHandler=(enteresExpenseData)=>{
    const expenseData={
        ...enteresExpenseData,
        id:Math.random().toString()
    }
        console.log(enteresExpenseData);
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpenses;
