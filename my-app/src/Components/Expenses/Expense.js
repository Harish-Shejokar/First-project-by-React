// import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";

const Expense = (props) => {
  return (
    <Card className="expense">
    {/* <h2>Let's get Started</h2>   */}
     
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            // location={expense.LocationOfExpenditure}
            id = {expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}

      {/* <ExpenseItem location={expense[1].LocationOfExpenditure} date={expense[1].date} title={expense[1].title} amount={expense[1].amount}></ExpenseItem>
    
          <ExpenseItem location={expense[2].LocationOfExpenditure} date={expense[2].date} title={expense[2].title} amount={expense[2].amount}></ExpenseItem>
    
          <ExpenseItem location={expense[3].LocationOfExpenditure} date={expense[3].date} title={expense[3].title} amount={expense[3].amount}></ExpenseItem>
         */}
    </Card>
  );
}

export default Expense;
