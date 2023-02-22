// import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React ,{ useState } from "react";

const Expense = (props) => {

  const [filteredYear , setFilteredYear] =useState('2020');
  
  
  const year = (year)=>{
     setFilteredYear(year)
     console.log(year);
  }


  return (
    <Card className="expense">
      <ExpensesFilter selected={filteredYear} selectedYear ={year} />
         
      {props.items.map((expense) => {
      
        return (
          <ExpenseItem
            // location={expense.LocationOfExpenditure}
            key={expense.id}
            id = {Math.random().toString()}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          /> 
        );
      })}
    </Card>
  );
}

export default Expense;
