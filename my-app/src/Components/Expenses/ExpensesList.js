import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props)=>{
  
  if(props.items.length === 0)
  {
   return <h2 className='expenses-list__fallback'>NO Expenses Found</h2>
  }

  if(props.items.length === 1)
  {
    const expense = props.items[0];
    return <ul className='expenses-list'>
    <ExpenseItem
    // location={expense.LocationOfExpenditure}
    key={expense.id}
    id={Math.random().toString()}
    date={expense.date}
    title={expense.title}
    amount={expense.amount}
  />
  <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
  </ul>
  
  }

    return <ul className='expenses-list'>
       { props.items.map((expense) => {
      return (
        <ExpenseItem
          // location={expense.LocationOfExpenditure}
          key={expense.id}
          id={Math.random().toString()}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
         
      )
    })
}
    </ul>
}

export default ExpenseList;