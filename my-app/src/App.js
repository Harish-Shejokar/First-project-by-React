import React , {useState}  from "react";
import Expense from "./Components/Expenses/Expense";
// import Card from "./Components/Card";
import NewExpense from "./Components/NewExpense/NewExpense";


// import logo from './logo.svg';
import "./App.css";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure: "Delhi",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    LocationOfExpenditure: "Pune",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: "Hydrabad",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: "Mumbai",
  },
];

const App = () => {
 
 const [expense, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (enteredExpense) =>{
    // console.log("In App.js");
    // console.log(data);
    // console.log(enteredExpense.date);
    // enteredExpense.date = Date.parse(enteredExpense.date);
    
    setExpenses((prevExpense)=>{
      return [enteredExpense,
        ...prevExpense]
    });
    
  }
  console.log(expense);

  return (
    <div>

      <NewExpense addExpense={addExpenseHandler}/>
      <Expense addExpense={addExpenseHandler} items={expense} />
    </div>
  );
}

export default App;
