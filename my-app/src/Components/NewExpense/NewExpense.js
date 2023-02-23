import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdit, setisEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpensseData) => {
    const expenseData = {
      ...enteredExpensseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.addExpense(expenseData);

    setisEdit(false);
  };

  const startEditHandler = () => {
    setisEdit(true);
  };

  const stopEditing = () => {
    setisEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEditHandler}>Add New Expense</button>}

      {isEdit && (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
