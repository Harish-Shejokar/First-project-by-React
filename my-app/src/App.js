import ExpenseItem from "./Components/ExpenseItem";

// import logo from './logo.svg';
import "./App.css";

function App() {
  const expense = [
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

  return (
    <div>
      <h2>Let's get Started</h2>

      {expense.map((expense) => {
        return (
          <ExpenseItem
            location={expense.LocationOfExpenditure}
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
    </div>
  );
}
export default App;
