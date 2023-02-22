
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{

    

    const saveExpenseDataHandler = (enteredExpensseData)=>{
        const expenseData = {
            ...enteredExpensseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.addExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;