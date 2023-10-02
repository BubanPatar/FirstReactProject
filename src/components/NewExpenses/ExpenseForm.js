import React,{useState} from "react";
import "./ExpenseForm.css";


const ExpenseForm=(props)=>{
    const [enteredTitle,setenteredTitle]=useState('');
    const [enteredAmount,setenteredAmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');
    const titleChangeHandler=(event)=>{
        setenteredTitle(event.target.value);
    };
    const AmountChangeHandler=(event)=>{
        setenteredAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setenteredDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };
return(
<form onSubmit={submitHandler}>
    <div className="new-expense_controls">
        <div className="new-expense_control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense_control">
            <label>amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}/>
        </div>

        <div className="new-expense_control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense_actions">
        <button type="Submit">Add Expense</button>
    </div>
</form>
);
}

export default ExpenseForm;