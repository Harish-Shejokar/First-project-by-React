import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [enteredInput , setInut] = useState({
  //   enteredTitle : "",
  //   enteredAmount : "",
  //   enteredDate : ""
  // })


  const typeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setInut({
    //   ...enteredInput,
    //   enteredTitle:event.target.value
    // })

    // setInut((prevState)=>{
    //  return {
    //   ...prevState,
    //   enteredTitle : event.target.value
    //  }
    // })

  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value)
    setEnteredAmount(event.target.value);
    // setInut({
    //   ...enteredInput,
    //   enteredAmount:event.target.value
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setInut({
    //   ...enteredInput,
    //   enteredDate:event.target.value
    // })
  };

  const submitHandler = (event)=>{
    event.preventDefault();
      const obj = {
       title : enteredTitle,
       amount : +enteredAmount,
       date : new Date(enteredDate)
      }

      props.onSaveExpenseData(obj);
      
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');

      
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} type="text" onChange={typeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.1"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-0-22"
            max="2023-12-31"
          />
        </div>

        
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit" >Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
