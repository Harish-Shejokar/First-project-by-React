import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

import Card from '../UI/Card';
import './ExpenseItem.css'


const ExpenseItem = (props) =>{

  const clickHandler = ()=>{
    console.log("working")
  };

  const DeleteExpense = ()=>{
    // console.log(props.id)
    const child = document.getElementById(props.id);
    child.remove();
  }
  
  return (
    <Card  className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} location={props.location}
      id={props.id} />
      <button onClick = {clickHandler} >ChangeTitle</button>
      <button onClick = {DeleteExpense} >DeleteExpense</button>
    </Card>
  );
}

export default ExpenseItem;
