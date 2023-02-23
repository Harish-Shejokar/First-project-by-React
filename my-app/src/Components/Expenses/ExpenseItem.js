import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) =>{
  const [title , setTitle] = useState(props.title)
  // console.log("code reEvaluation ");
  
  const clickHandler = ()=>{
    setTitle("New-title");
    console.log(title);
  };

  // const DeleteExpense = ()=>{
  //   // console.log(props.id)
  //   const child = document.getElementById(props.id);
  //   child.remove();
  // }
  
  const [amount, setAmount] = useState(props.amount)

  const changeAmount = ()=>{
      setAmount('$100');
  }
  
  return (
    <li>
      
    <Card  className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
       <ExpenseDetails title={title} amount={amount} location={props.location}
      id={props.id} />
      <button onClick = {changeAmount} >$100</button>
      <button onClick = {clickHandler} >ChangeTitle</button>
      {/* <button onClick = {DeleteExpense} >DeleteExpense</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
