// import Card from "./Card";
import ExpenseList from "./ExpensesList";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const year = (year) => {
    setFilteredYear(year);
    // console.log(year);
  };
 
  
  const FilteredExpense = props.items.filter(elem =>{
    // console.log(filteredYear);
    // console.log(elem.date.getFullYear())
    return (elem.date.getFullYear().toString() === filteredYear);
    
  });


  return (
    <Card className="expense">
      <ExpensesFilter selected={filteredYear} selectedYear={year} />

      <ExpenseChart expenses={FilteredExpense}/>

     <ExpenseList items={FilteredExpense}/>
      
    </Card>
  );
};

export default Expense;
